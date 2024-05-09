import { DynamicModule, ForwardReference, Inject, MiddlewareConsumer, ModuleMetadata, NestModule, Provider, Type, ValidationPipe } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { RedisHealthModule } from '@songkeys/nestjs-redis-health';
import { AppConfig } from './app.config';
import { createLoggerModule } from './module-imports/createLoggerModule';
import { createTypegooseModule } from './module-imports/createTypegooseModule';
import { createCacheModule } from './module-imports/createCacheModule';
import { JwtModule } from '@nestjs/jwt';
import { GraphQLSchema } from 'graphql';
import { PassportModule } from '@nestjs/passport';
import { ApolloFederationDriver, ApolloFederationDriverConfig, ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { rule, shield } from 'graphql-shield';
import { applyMiddleware } from 'graphql-middleware';
import { JwtAuthMiddleware } from './middlewares/jwt-auth.middleware';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from "./shared/shared.module";
import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { JwtStrategy } from './shared/jwt.strategy';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';


// todo: optimize imports and exports for better bundle size
export function createHostingModules(config: AppConfig) {
  const moduleMeta: ModuleMetadata = {
    imports: [
      HttpModule,
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      TerminusModule],
    providers: [{
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }],
  };
  const sharedExports: (Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference<any>)[] = [];
  const sharedProviders: Provider[] = [{ provide: AppConfig, useValue: config }];
  const hostProviders: Provider[] = [];
  moduleMeta.imports.push(createLoggerModule(config))
  if (config.jwt) {
    const jwtModules = [PassportModule.registerAsync({
      useFactory: async () => ({ defaultStrategy: 'jwt' }),
    }),
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: config.jwt?.secret ?? "secret", // replace with your own secret key  
        signOptions: { expiresIn: '1440m', ...config.jwt?.signOptions },
      }),
    }),]
    hostProviders.push(
      {
        provide: APP_INTERCEPTOR,
        useClass: JwtAuthMiddleware,
      },
      {
        provide: APP_PIPE,
        useValue: new ValidationPipe({
          transform: true,
        }),
      }
    );
    sharedProviders.push(JwtStrategy);
    sharedExports.push(...jwtModules);
    // moduleMeta.imports.push(...jwtModules);
  }
  if (config.redis) {
    const cacheModule = createCacheModule(config);
    sharedExports.push(cacheModule);
    // moduleMeta.imports.push(cacheModule, RedisHealthModule)
    moduleMeta.imports.push(RedisHealthModule)
  }
  if (config.typegoose) {
    moduleMeta.imports.push(createTypegooseModule(config))
  }
  const schemaTransforms: Array<(schema: GraphQLSchema) => GraphQLSchema> = [];
  if (config.permissions) {
    const rules = shield(config.permissions, {
      allowExternalErrors: true,
    });
    schemaTransforms.push((schema: GraphQLSchema) => applyMiddleware(schema, rules));
  }
  if (config.gql?.subgraphs?.length) {
    moduleMeta.imports.push(GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        installSubscriptionHandlers: true,
        playground: false,
        introspection: true,
        includeStacktraceInErrorResponses: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        context: (ctx) => {
          return ctx;
        }
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            ...config.gql.subgraphs ?? []
          ],
        }),
        buildService({ name, url }) {
          return new RemoteGraphQLDataSource({
            url,
            willSendRequest: ({ request, context }) => {
              // const authorizationHeaderValue = context?.req?.headers?.authorization;
              // if (authorizationHeaderValue) {
              //   request.http?.headers?.set("authorization", authorizationHeaderValue);
              // }
              const headers = context?.req?.headers;
              if (headers) {
                for (const [headerKey, headerValue] of Object.entries(headers)) {
                  // todo: exclude some headers if not needed
                  request.http?.headers.set(headerKey, headerValue as string);
                }
              }
            }
          });
        }
      },

    }))
  }
  else {
    moduleMeta.imports.push(GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      useFactory: async () => {
        const plugins = [
          ApolloServerPluginLandingPageLocalDefault()
        ];
        if (process.env.NODE_ENV === "test") {
          plugins.push(ApolloServerPluginInlineTraceDisabled());
        }
        return {
          // installSubscriptionHandlers: true,
          autoSchemaFile: {
            path: "schema.gql", federation: 2
          },
          playground: false,
          introspection: true,
          plugins: [...plugins],
          // transformSchema: (schema: GraphQLSchema) => {
          //   schema = applyMiddleware(schema, permissions);
          //   return schema;
          // },
          sortSchema: true,
          // playground: false,
          // introspection: true,
          // plugins: [ApolloServerPluginLandingPageLocalDefault()],
          transformSchema: (schema: GraphQLSchema) => {
            schemaTransforms.forEach(transform => schema = transform(schema));
            return schema;
          },
          // context: ({ req }): any => {
          //   return { req };
          // },
        };
      },
    }))
  }
  moduleMeta.providers.push(...hostProviders);
  moduleMeta.imports.push(SharedModule.forRoot({
    reExports: [...sharedExports], providers: [...sharedProviders]
  }));
  return moduleMeta;
}

export class HostingModule implements NestModule {
  /**
   *
   */
  constructor(@Inject(AppConfig) private appConfig: AppConfig) {

  }
  configure(consumer: MiddlewareConsumer) {
    if (this.appConfig.jwt) {
      consumer
        .apply(
          // LoggerMiddleware,
          JwtAuthMiddleware)
        .forRoutes('*');
    }
  }
  static winstonInstance: any;

  static forRoot(meta: ModuleMetadata, config: AppConfig): DynamicModule {
    const configuredMeta = createHostingModules(config);
    meta.imports ??= []
    meta.imports.push(...configuredMeta.imports);
    meta.providers ??= []
    meta.providers.push(...configuredMeta.providers);
    return {
      global: true,
      module: HostingModule,
      ...meta,
    }
  }
}

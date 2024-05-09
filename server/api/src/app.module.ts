import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { IntrospectAndCompose } from '@apollo/gateway';
import { HostingModule } from 'xorgx-libs';
import { appConfig } from './app.config';

@Module({
  imports: [
    HostingModule.forRoot({},
      appConfig
    )
  ],
})
export class AppModule { }

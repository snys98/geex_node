import ObjectID from 'bson-objectid';
import * as apm from 'elastic-apm-node';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';

import { ecsFormat } from '@elastic/ecs-winston-format';

import { GeexConfig } from '../geex.config';
import { LoggingInterceptor } from '../interceptors';
import { Logger } from '../logging';
import { transport } from 'winston';

export function createLoggerModule(geexConfig: GeexConfig) {

  const transports: transport[] = [
    new winston.transports.Console({
      level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike(geexConfig.appName, {
          colors: true,
          prettyPrint: true,
        })
      )
    }),
  ];
  if (geexConfig.logger.esNode) {
    const format = ecsFormat({
      convertReqRes: true,
      convertErr: true,
      apmIntegration: !!geexConfig.logger.apmUrl,
    });
    const esTransport = new ElasticsearchTransport({
      indexPrefix: geexConfig.appName,
      apm: geexConfig.logger.apmUrl ? apm.start({
        serverUrl: geexConfig.logger.apmUrl,
        logLevel: "info",
        serviceName: geexConfig.appName,
        useElasticTraceparentHeader: true,
      }) : undefined,
      format: format,
      useTransformer: false,
      level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
      clientOpts: {
        enableMetaHeader: true,
        maxResponseSize: 10000000,
        generateRequestId: () => { new ObjectID(Date.now()).toHexString() },
        name: geexConfig.appName,
        node: geexConfig.logger.esNode,
        auth: {
          username: geexConfig.logger.esUsername!,
          password: geexConfig.logger.esPassword!,
        },
      }
    });
    transports.push(esTransport);
  }


  const module = WinstonModule.forRoot({
    transports,
  });
  const logService = new Logger();
  module.providers = [...module.providers ?? [], { provide: Logger, useValue: logService },
  {
    provide: LoggingInterceptor, useFactory: () => {
      new LoggingInterceptor(logService)
    },
  }]
  module.exports = [...module.exports ?? [], { provide: Logger, useValue: logService }, LoggingInterceptor]
  return module;
}

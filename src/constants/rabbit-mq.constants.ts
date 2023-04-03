import { ConfigService } from '@nestjs/config';
import { Helper } from 'src/helpers';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ModuleNames } from 'src/enums/global.enum';

const helper = new Helper();

export const rabbitMqClientConfig = {
  provide: ModuleNames.PRODUCT_MODULE,
  useFactory: () => {
    const {
      rabbitMqUser,
      rabbitMqPassword,
      rabbitMqHost,
      rabbitMqPort,
      rabbitMqQueueName,
      productsIntegrationMicroservicesToken
    } = helper.getEnviroment();

    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqHost}:${rabbitMqPort}`],
        queue: rabbitMqQueueName,
        queueOptions: {
          durable: true
        },
        headers: {
          apiKey: productsIntegrationMicroservicesToken
        }
      }
    });
  },
  inject: [ConfigService]
};

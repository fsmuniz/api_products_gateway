import { HttpException, HttpStatus } from '@nestjs/common';
import { ConfigObject, ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';
import { responseHttpErrorMessage } from 'src/constants/http-responses';
import { ProductQueueList } from 'src/enums/global.enum';
import { TEnvironment } from 'src/types/global.types';

export class Helper {
  configService: ConfigService<Record<string, unknown>, false>;

  constructor() {
    this.configService = new ConfigService();
  }

  getEnviroment(): TEnvironment {
    return {
      nodeEnv: this.configService.get('NODE_ENV'),
      port: this.configService.get('PORT'),
      rabbitMqUser: this.configService.get('RABBITMQ_USER'),
      rabbitMqPassword: this.configService.get('RABBITMQ_PASSWORD'),
      rabbitMqHost: this.configService.get('RABBITMQ_HOST'),
      rabbitMqPort: this.configService.get('RABBITMQ_PORT'),
      rabbitMqQueueName: this.configService.get('RABBITMQ_QUEUE_NAME'),
      productsIntegrationMicroservicesToken: this.configService.get('PRODUCT_MICROSERVICE_TOKEN')
    };
  }

  async sendEvent(eventProps: ProductQueueList, data: any, clientProxy: ClientProxy): Promise<any> {
    try {
      const response = await firstValueFrom(
        clientProxy.send(eventProps, data).pipe(
          timeout(2000) // <-- HTTP request will error out if no response for 5 seconds
        )
      );

      return response;
    } catch (e) {
      const timeoutResponse = responseHttpErrorMessage[HttpStatus.REQUEST_TIMEOUT];

      if (e?.message === timeoutResponse.message[0]) {
        throw new HttpException(timeoutResponse, HttpStatus.REQUEST_TIMEOUT);
      } else if (e?.statusCode) {
        throw e;
      }

      throw new HttpException(
        responseHttpErrorMessage[HttpStatus.INTERNAL_SERVER_ERROR],
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}

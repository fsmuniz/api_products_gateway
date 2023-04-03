import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { SwaggerService } from './swagger/swagger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swagger = new SwaggerService();
  const configService = new ConfigService();
  const logger = new Logger('bootstrap');
  const port = configService.get('PORT') || 3000;

  swagger.bootstrap(app);
  await app.listen(port);

  const appUrl = await app.getUrl();

  logger.log(`Api gateway running on  ${appUrl}`);
}
bootstrap();

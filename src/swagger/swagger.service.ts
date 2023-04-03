import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Injectable()
export class SwaggerService {
  bootstrap(app: INestApplication) {
    // config is for swagger
    const config = new DocumentBuilder().setTitle('API').setDescription('API').setVersion('1.0').build();

    const document = SwaggerModule.createDocument(app, config);
    const swaggerCustomOptions = {
      customCss: '.swagger-ui section.models { visibility: hidden;}'
    };
    SwaggerModule.setup('swagger', app, document, swaggerCustomOptions);
  }
}

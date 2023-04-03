import { ConfigService } from '@nestjs/config';
import { Helper } from 'src/helpers';
import { ProductController } from 'src/modules/product/product.controller';
import { ProductService } from 'src/modules/product/product.service';

export const rabbitMqClientMock = {
  send: jest.fn()
};

export const productControllerConfigTestOptions = {
  controllers: [ProductController],
  providers: [
    ProductService,
    Helper,
    ConfigService,
    { provide: 'PRODUCT_MODULE', useValue: rabbitMqClientMock },
    {
      provide: ProductService,
      useValue: {
        create: jest.fn()
      }
    }
  ]
};

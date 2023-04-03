import { Module } from '@nestjs/common';
import { rabbitMqClientConfig } from 'src/constants/rabbit-mq.constants';
import { ConfigService } from '@nestjs/config';
import { Helper } from 'src/helpers';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    ConfigService,
    Helper,
    rabbitMqClientConfig
  ]
})
export class ProductModule {}

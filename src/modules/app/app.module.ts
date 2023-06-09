import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProductModule } from '../product/product.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
  exports: [ConfigService]
})
export class AppModule {}

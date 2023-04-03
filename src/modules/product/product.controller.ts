import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserSwaggerDecorator } from './swagger/swagger-wrapper.docorator';
import { GlobalSwaggerDecorator } from 'src/global-swagger/global-route.docorator';
import { ProductService } from './product.service';
import { ProductCreateDto } from './dto/product-create.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @GlobalSwaggerDecorator(false)
  @UserSwaggerDecorator()
  @Post()
  async create(@Body() productCreateDto: ProductCreateDto) {
    return await this.productService.create(productCreateDto);
  }
}

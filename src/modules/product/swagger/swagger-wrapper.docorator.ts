import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateProductOkResponse } from './create-product-ok-response.swagger';

export function UserSwaggerDecorator() {
  return applyDecorators(
    ApiOkResponse({
      type: CreateProductOkResponse,
      description: 'Returns product'
    })
  );
}

import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
  ApiBearerAuth
} from '@nestjs/swagger';

export function GlobalSwaggerDecorator(auth: boolean) {
  let decorators = [
    ApiBadRequestResponse({
      description: 'Bad Request'
    }),
    ApiInternalServerErrorResponse({
      description: 'Internal server error'
    })
  ];

  if (auth) {
    decorators = [...decorators, ...[ApiUnauthorizedResponse({ description: 'Unauthorized' }), ApiBearerAuth()]];
  }

  return applyDecorators(...decorators);
}

import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

export function AppSwaggerDecorator() {
  return applyDecorators(
    ApiOkResponse({
      description: 'Returns the app health check'
    })
  );
}

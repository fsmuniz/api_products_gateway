import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { AppSwaggerDecorator } from './swagger/swagger-wrapper.docorator';
@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @AppSwaggerDecorator()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

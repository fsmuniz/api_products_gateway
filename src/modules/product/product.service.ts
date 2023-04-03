import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ModuleNames, ProductQueueList } from 'src/enums/global.enum';
import { Helper } from 'src/helpers';
import { ProductCreateDto } from './dto/product-create.dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly helper: Helper,
    @Inject(ModuleNames.PRODUCT_MODULE)
    private readonly productClient: ClientProxy
  ) {}

  async create(productCreateDto: ProductCreateDto) {
    const eventProps = ProductQueueList.CREATE_PRODUCT;

    return await this.helper.sendEvent(eventProps, productCreateDto, this.productClient);
  }
}

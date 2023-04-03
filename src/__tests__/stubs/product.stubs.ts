import { ProductCreateDto } from 'src/modules/product/dto/product-create.dto';
import { Product } from 'src/modules/product/entities/product.entity';

export const productDto: ProductCreateDto = {
  url: 'https://www.zattini.com.br/calca-jeans-skinny-daytan-masculina-azul-RQB-0032-008'
};

export const productCode = 'RQB-0032-008';
export const productScraping = {
  code: productCode,
  previewImgLink: 'http://test.com',
  title: 'teste',
  description: 'teste',
  originalPrice: '123',
  discountPrice: '123'
};

export const product: Partial<Product> = {
  code: productCode,
  title: 'teste',
  description: 'teste',
  discountPrice: '123',
  originalPrice: '123',
  previewImgLink: 'http://test.com'
};

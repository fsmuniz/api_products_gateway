import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from 'src/modules/product/product.service';
import { product, productDto } from 'src/__tests__/stubs/product.stubs';
import { productServiceConfigTestOptions } from './configs/product.service.config';

describe('ProductService', () => {
  let productService: ProductService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule(productServiceConfigTestOptions).compile();
    productService = module.get<ProductService>(ProductService);
  });

  afterEach(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();
  });

  describe('create', () => {
    it('should create a user and return it', async () => {
      jest.spyOn(productService, 'create').mockResolvedValue(product);

      const result = await productService.create(productDto);

      expect(result).toBe(product);
      expect(productService.create).toHaveBeenCalledWith(productDto);
    });
  });
});

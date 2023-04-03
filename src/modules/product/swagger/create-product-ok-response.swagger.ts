import { ApiProperty } from '@nestjs/swagger';

export class CreateProductOkResponse {
  @ApiProperty({ description: 'Product code', type: Number })
  public code: string;

  @ApiProperty({ description: 'Preview Image Link of product', type: String })
  public previewImgLink: string;

  @ApiProperty({ description: 'Product title', type: String })
  public title: string;

  @ApiProperty({ description: 'Product description', type: String })
  public description: string;

  @ApiProperty({ description: 'Original pricing of product', type: String })
  public originalPrice: string;

  @ApiProperty({ description: 'Product pricing  - descount of product', type: String })
  public discountPrice: string;

  @ApiProperty({ description: 'Product id of registered from database', type: String })
  public id?: number;
}

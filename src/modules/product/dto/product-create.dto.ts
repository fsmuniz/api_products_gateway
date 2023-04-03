import { ApiProperty } from '@nestjs/swagger';

export class ProductCreateDto {
  @ApiProperty({
    description: 'url',
    type: String,
    required: true
  })
  public url: string;
}

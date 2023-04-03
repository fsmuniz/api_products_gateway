import { ApiProperty } from '@nestjs/swagger';

export class DefaultResponse {
  @ApiProperty({
    description: 'Number of status code',
    type: Number
  })
  public statusCode: number;

  @ApiProperty({
    description: 'Error description',
    type: String
  })
  public errorDescription: string;

  @ApiProperty({
    description: 'Name of status code',
    type: String
  })
  public name: number;

  @ApiProperty({
    description: 'Additional informations for the error',
    type: String,
    required: false
  })
  public _debug: number;
}

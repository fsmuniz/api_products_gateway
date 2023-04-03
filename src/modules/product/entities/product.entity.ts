import { DefaultBaseEntity } from 'src/global-entities/base.entity';

export class Product extends DefaultBaseEntity {
  public code: string;

  public previewImgLink: string;

  public title: string;

  public description: string;

  public originalPrice: string;

  public discountPrice: string;
}

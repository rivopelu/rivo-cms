import { IResListAllCategories } from './IResListAllCategories';
import { IResListBLockContent } from './IResListBlockContent';

export interface IResDetailBlog {
  id: string;
  slug: string;
  thumbnail_url: string;
  title: string;
  created_date: number;
  categories: IResListAllCategories[];
  content: IResListBLockContent[];
}

export interface IResListBLockContent {
  id: string;
  type: string;
  props: IBlockProps;
  content: IBlockContent[];
  children: any[];
}

export interface IBlockProps {
  textColor: string;
  backgroundColor: string;
  textAlignment: string;
  level: number;
}

export interface IBlockContent {
  type: string;
  text: string;
  styles: Styles;
}

export interface Styles {}

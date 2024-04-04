import { PAGE_TYPE_ENUM } from '../enums/PageTypeEnums';
import AuthPage from '../pages/auth/AuthPage';
import BlogPage from '../pages/blogs/BlogPage';
import DetailBlogPage from '../pages/blogs/DetailBlogPage';
import NewBlogPage from '../pages/blogs/NewBlogPage';
import HomePage from '../pages/home/HomePage';
import BrandPage from '../pages/master-data/BrandPage';
import CategoriesPage from '../pages/master-data/CategoriesPage';
import TagPage from '../pages/master-data/TagPage';
import { ROUTES } from './routes';

export interface IRoutesList {
  path: string;
  element: () => JSX.Element;
  type: PAGE_TYPE_ENUM;
}

export const RouteList: IRoutesList[] = [
  {
    path: ROUTES.SIGN_IN(),
    element: AuthPage,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    path: ROUTES.HOME(),
    element: HomePage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  // BLOGS
  {
    path: ROUTES.BLOG.PAGE(),
    element: BlogPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    path: ROUTES.BLOG.NEW_BLOG(),
    element: NewBlogPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    path: ROUTES.BLOG.DETAIL(':slug'),
    element: DetailBlogPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },

  // MASTER DATA
  {
    path: ROUTES.MASTER_DATA.BRAND(),
    element: BrandPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    path: ROUTES.MASTER_DATA.CATEGORIES(),
    element: CategoriesPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    path: ROUTES.MASTER_DATA.TAG(),
    element: TagPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
];

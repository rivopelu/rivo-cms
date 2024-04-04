import { useEffect, useState } from 'react';
import { IBreadcrumbsData } from '../../components/PageHeader';
import { BlogActions } from '../../redux/actions/blog.actions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ROUTES } from '../../routes/routes';
import { IResListBLog } from '../../models/response/IResListBlog';

export default function useBlogPage() {
  const dispatch = useAppDispatch();
  const blogActions = new BlogActions();
  const blog = useAppSelector((state) => state.blog);

  const [dataList, setDataList] = useState<IResListBLog[]>([]);

  useEffect(() => {
    if (blog?.listBLog?.data) setDataList(blog.listBLog.data);
  }, [blog.listBLog]);

  useEffect(() => {
    dispatch(blogActions.getListBlog());
  }, []);

  const breadCrumb: IBreadcrumbsData[] = [
    {
      title: 'Home',
      path: ROUTES.HOME(),
    },

    {
      title: 'Blogs',
    },
  ];

  return { breadCrumb, dataList };
}

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { BlogActions } from '../../redux/actions/blog.actions';
import { useParams } from 'react-router-dom';
import { IResDetailBlog } from '../../models/response/IResDetailBlog';

export default function useDetailBlogPage() {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const blogActions = new BlogActions();
  const blog = useAppSelector((state) => state.blog);

  const [dataDetail, setDataDetail] = useState<IResDetailBlog | undefined>();

  useEffect(() => {
    if (slug) {
      dispatch(blogActions.getDetailBlog(slug));
    }
  }, [slug]);

  useEffect(() => {
    if (blog?.detailBLog?.data) setDataDetail(blog.detailBLog.data);
  }, [blog.detailBLog]);

  return { dataDetail };
}

import { Button } from '@nextui-org/react';
import PageHeader, { IBreadcrumbsData } from '../../components/PageHeader';
import { ROUTES } from '../../routes/routes';
import { Link, useNavigate } from 'react-router-dom';

export default function BlogPage() {
  const navigate = useNavigate();
  const breadCrumb: IBreadcrumbsData[] = [
    {
      title: 'Home',
      path: ROUTES.HOME(),
    },

    {
      title: 'Blogs',
    },
  ];
  return (
    <div>
      <PageHeader title="blogs List" breadcrumbs={breadCrumb}>
        <Button onPress={() => navigate(ROUTES.BLOG.NEW_BLOG())}>Create New Blog</Button>
      </PageHeader>
    </div>
  );
}

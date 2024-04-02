import { Button } from '@nextui-org/react';
import PageHeader, { IBreadcrumbsData } from '../../components/PageHeader';
import { ROUTES } from '../../routes/routes';

export default function BrandPage() {
  const breadCrumb: IBreadcrumbsData[] = [
    {
      title: 'Home',
      path: ROUTES.HOME(),
    },
    {
      title: 'Master Data',
      path: ROUTES.MASTER_DATA.BRAND(),
    },
    {
      title: 'Brand',
    },
  ];
  return (
    <div className="w-full ">
      <PageHeader title="Brand List" breadcrumbs={breadCrumb}>
        <Button>Create Brand</Button>
      </PageHeader>
    </div>
  );
}

import { Button, Image, Tooltip } from '@nextui-org/react';
import PageHeader, { IBreadcrumbsData } from '../../components/PageHeader';
import { ROUTES } from '../../routes/routes';
import { useBrandPage } from './useBrandPage.tsx';
import { IResListBrand } from '../../models/response/IResListBrand.ts';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ITableColumnData, MainTable } from '../../components/MainTable.tsx';

export default function BrandPage() {
  const page = useBrandPage();
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

  const table: ITableColumnData[] = [
    {
      headerTitle: 'name',
      key: 'name',
      layouts: uiName,
    },
    {
      headerTitle: 'website',
      align: 'center',
      key: 'url',
      layouts: (e: IResListBrand) => (
        <Link to={e.url} className="text-slate-300" target="_blank">
          {e.url}
        </Link>
      ),
    },
    {
      headerTitle: 'Action',
      align: 'center',
      key: 'action',
      layouts: uiActions,
    },
  ];

  function uiActions() {
    return (
      <Tooltip placement="bottom" color="default" content="detail">
        <Button isIconOnly>
          <IoIosInformationCircleOutline />
        </Button>
      </Tooltip>
    );
  }

  function uiName(e: IResListBrand) {
    return (
      <div className="flex gap-6 items-center">
        <Image isBlurred height={100} src={e.logo} alt={e.name} className="rounded-none h-10 w-10" />
        <h3 className="text-xl">{e.name}</h3>
      </div>
    );
  }
  return (
    <div className="w-full grid gap-7">
      <PageHeader title="Brand List" breadcrumbs={breadCrumb}>
        <Button>Create Brand</Button>
      </PageHeader>
      <MainTable hideHeader data={page.listBrand} columns={table} />
    </div>
  );
}

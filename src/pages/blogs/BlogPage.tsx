import { Button, Image, Tooltip } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import PageHeader, { IBreadcrumbsData } from '../../components/PageHeader';
import { ROUTES } from '../../routes/routes';
import useBlogPage from './useBlogPage';
import { ITableColumnData, MainTable } from '../../components/MainTable';
import { IResListBLog } from '../../models/response/IResListBlog';
import { IoIosInformationCircleOutline } from 'react-icons/io';

export default function BlogPage() {
  const page = useBlogPage();
  const navigate = useNavigate();

  const tableColumn: ITableColumnData[] = [
    {
      key: 'title',
      headerTitle: 'Title',
      layouts: uiTitle,
    },
    {
      key: 'actions',
      headerTitle: 'Actions',
      layouts: uiActions,
    },
  ];
  function uiActions(e: IResListBLog) {
    return (
      <Tooltip placement="bottom" color="default" content="detail">
        <Button isIconOnly onPress={() => navigate(ROUTES.BLOG.DETAIL(e.slug))}>
          <IoIosInformationCircleOutline />
        </Button>
      </Tooltip>
    );
  }

  function uiTitle(e: IResListBLog) {
    return (
      <div className="flex gap-6 items-center">
        <Image isBlurred height={100} src={e.thumbnail_url} alt={e.title} className="rounded-none h-10 w-10" />
        <h3 className="text-xl">{e.title}</h3>
      </div>
    );
  }
  return (
    <div className="grid gap-10">
      <PageHeader title="blogs List" breadcrumbs={page.breadCrumb}>
        <Button onPress={() => navigate(ROUTES.BLOG.NEW_BLOG())}>Create New Blog</Button>
      </PageHeader>
      <MainTable hideHeader columns={tableColumn} data={page.dataList} />
    </div>
  );
}

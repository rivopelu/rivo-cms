import { Button, Image, ModalBody, ModalFooter, Tooltip } from '@nextui-org/react';
import PageHeader, { IBreadcrumbsData } from '../../components/PageHeader';
import { ROUTES } from '../../routes/routes';
import { useBrandPage } from './useBrandPage.ts';
import { IResListBrand } from '../../models/response/IResListBrand.ts';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ITableColumnData, MainTable } from '../../components/MainTable.tsx';
import ModalPopup from '../../components/ModalPopup.tsx';
import UploadBox from '../../components/UploadBox.tsx';
import { InputText } from '../../components/InputText.tsx';
import { InputTextArea } from '../../components/InputTextarea.tsx';

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
  const formik = page.formik;

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

  function modalContent() {
    return (
      <>
        <ModalBody className="border-b-slate-300/10 border-b">
          <div className="grid gap-5 my-10">
            <UploadBox onChange={(e) => formik.setFieldValue('logo', e)} value={formik.values.logo} />
            <InputText
              label="name"
              placeholder="insert name"
              name="name"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.name && formik.errors.name}
            />
            <InputText
              label="url"
              placeholder="insert url"
              name="url"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.url && formik.errors.url}
            />
            <InputTextArea
              label="description"
              placeholder="insert description"
              name="description"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.description && formik.errors.description}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={page.onClosePopup} variant="bordered">
            Cancel
          </Button>
          <Button variant={'faded'} isLoading={page.loadingCreated} onClick={() => formik.handleSubmit()}>
            Submit
          </Button>
        </ModalFooter>
      </>
    );
  }

  return (
    <div className="w-full grid gap-7">
      <ModalPopup body={modalContent()} onClose={page.onClosePopup} title={'Add new brand'} open={page.showModalBody} />
      <PageHeader title="Brand List" breadcrumbs={breadCrumb}>
        <Button onPress={() => page.setShowModalBody(true)}>Create Brand</Button>
      </PageHeader>
      <MainTable hideHeader data={page.listBrand} columns={table} />
    </div>
  );
}

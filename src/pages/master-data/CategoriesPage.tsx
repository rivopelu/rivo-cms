import { Button, Card, ModalBody, ModalFooter } from '@nextui-org/react';
import { InputText } from '../../components/InputText';
import ModalPopup from '../../components/ModalPopup';
import PageHeader from '../../components/PageHeader';
import { IBreadcrumbData } from '../../models/response/BaseResponse';
import { ROUTES } from '../../routes/routes';
import useCategoriesPage from './useCategoriesPage';

export default function CategoriesPage() {
  const page = useCategoriesPage();
  const breadcrumbs: IBreadcrumbData[] = [
    {
      title: 'Home',
      path: ROUTES.HOME(),
    },
    {
      title: 'Master Data',
      path: ROUTES.MASTER_DATA.BRAND(),
    },
    {
      title: 'Master Data',
    },
  ];

  function bodyModal() {
    return (
      <>
        <ModalBody>
          <div className="my-10">
            <InputText
              value={page.inputValue}
              onChange={(e) => page.setInputValue(e?.target?.value)}
              label="name"
              placeholder="insert category name"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light">
            Cancel
          </Button>
          <Button onPress={page.onSubmit} isLoading={page.loadingCreate} isDisabled={!page.inputValue} variant="bordered" color="primary">
            Submit
          </Button>
        </ModalFooter>
      </>
    );
  }
  return (
    <div>
      <ModalPopup open={page.openModal} body={bodyModal()} onClose={page.onCloseModal} title="create new category" />
      <PageHeader title="Cateogries List" breadcrumbs={breadcrumbs}>
        <Button onPress={() => page.setOpenModal(true)}>Create New Category</Button>
      </PageHeader>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {page.dataList.map((item, i) => (
          <Card className="p-5" key={i}>
            <div>{item.name}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

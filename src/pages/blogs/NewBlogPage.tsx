import { Button } from '@nextui-org/react';
import Editor from '../../components/Editor';
import PageHeader from '../../components/PageHeader';
import useNewBlogPage from './useNewBlogPage';
import InputAutocomplete from '../../components/InputAutocomplete';

function NewBlogPage() {
  const page = useNewBlogPage();
  return (
    <div className="grid gap-10">
      <PageHeader title="Add new blogs">
        <Button onPress={() => page.onSubmit()}>SUBMIT</Button>
      </PageHeader>
      <div className="grid gap-10">
        <div className="grid grid-cols-2">
          <InputAutocomplete data={page.listCategories} />
        </div>
      </div>
      <Editor onChange={(e) => page.setBlockData(e)} />
    </div>
  );
}

export default NewBlogPage;

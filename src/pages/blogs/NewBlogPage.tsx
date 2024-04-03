import { Button } from '@nextui-org/react';
import Editor from '../../components/Editor';
import PageHeader from '../../components/PageHeader';
import useNewBlogPage from './useNewBlogPage';
import InputSelectMultiple from '../../components/InputSelectMultiple.tsx';
import { InputText } from '../../components/InputText.tsx';

function NewBlogPage() {
  const page = useNewBlogPage();
  const formik = page.formik;
  return (
    <div className="grid gap-10">
      <PageHeader title="Add new blogs">
        <Button onPress={() => formik.handleSubmit()}>SUBMIT</Button>
      </PageHeader>
      <div className="grid gap-10">
        <div className="grid grid-cols-2 gap-10">
          <InputText
            label={'title'}
            placeholder={'insert title'}
            required={true}
            name={'title'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            errorMessage={formik.touched.title && formik.errors.title}
          />
          <InputSelectMultiple
            required={true}
            label={'categories'}
            name={'categories_id'}
            placeholder={'select categories'}
            onChange={(e) => formik.setFieldValue('categories_id', e)}
            data={page.listCategories}
          />
        </div>
      </div>
      <Editor onChange={(e) => formik.setFieldValue('content', JSON.stringify(e))} />
    </div>
  );
}

export default NewBlogPage;

import useDetailBlogPage from './useDetailBlogPage';

function DetailBlogPage() {
  const page = useDetailBlogPage();
  return (
    <div>
      <h1>{page.dataDetail?.title}</h1>
    </div>
  );
}

export default DetailBlogPage;

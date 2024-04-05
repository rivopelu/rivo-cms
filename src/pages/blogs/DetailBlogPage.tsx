import BlockViewerTemplate from '../../components/BlockViewerTemplate';
import useDetailBlogPage from './useDetailBlogPage';

function DetailBlogPage() {
  const page = useDetailBlogPage();
  return (
    <div>
      <h1>{page.dataDetail?.title}</h1>

      <div className="mt-14">
        <BlockViewerTemplate data={page.dataDetail?.content || []} />
      </div>
    </div>
  );
}

export default DetailBlogPage;

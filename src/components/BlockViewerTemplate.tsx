import { Code, Snippet } from '@nextui-org/react';
import { IResListBLockContent } from '../models/response/IResListBlockContent';
import MainAlert from './MainAlert';
import HeadingViewer from './plugin/HeadingViewer';

function Content({ content }: { content: IResListBLockContent }) {
  switch (content.type) {
    case 'heading':
      return content.content.map((_, i) => <HeadingViewer content={content} key={i} />);
    case 'paragraph':
      if (content.content.length === 0) {
        return <div className="h-4 w-4"></div>;
      } else {
        return content.content.map((e, i) => <div key={i}>{e.text}</div>);
      }
    case 'numberedListItem':
      return (
        <ul className="ml-10">
          {content.content.map((e, i) => (
            <li className="list-decimal" key={i}>
              {e.text}
            </li>
          ))}
        </ul>
      );
    case 'bulletListItem':
      return (
        <ul className="ml-10">
          {content.content.map((e, i) => (
            <li key={i}>{e.text}</li>
          ))}
        </ul>
      );
    case 'alert':
      return (
        <div>
          {content.content.map((e, i) => (
            <MainAlert type={content.props?.type} text={e.text} key={i} />
          ))}
        </div>
      );
    case 'codeBlock':
      return (
        <div>
          {content.content.map((e, i) => (
            <Snippet className="border border-slate-50/10 px-6 py-2" key={i}>
              {e.text}
            </Snippet>
          ))}
        </div>
      );
    default:
      return <div>{content.id}</div>;
  }
}

function BlockViewerTemplate({ data }: { data: IResListBLockContent[] }) {
  return (
    <article>
      {data.map((e, i) => (
        <Content content={e} key={i} />
      ))}
    </article>
  );
}

export default BlockViewerTemplate;

import { IResListBLockContent } from '../../models/response/IResListBlockContent';

export default function HeadingViewer(props: IProps) {
  if (props.content.props.level === 1.0) {
    return props.content.content.map((e, i) => (
      <h1 key={i} className="font-semibold text-4xl">
        {e.text}
      </h1>
    ));
  } else if (props.content.props.level === 2.0) {
    return props.content.content.map((e, i) => (
      <h2 key={i} className="font-semibold text-2xl">
        {e.text}
      </h2>
    ));
  } else if (props.content.props.level === 3.0) {
    return props.content.content.map((e, i) => (
      <h3 key={i} className="font-semibold text-xl">
        {e.text}
      </h3>
    ));
  } else {
    return <></>;
  }
}

interface IProps {
  content: IResListBLockContent;
}

import { Button, Tooltip } from '@nextui-org/react';
import { IoCopyOutline } from 'react-icons/io5';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeBlock(props: IProps) {
  return (
    <div className="relative ">
      <SyntaxHighlighter wrapLines language="html" style={atelierLakesideDark}>
        {props?.content || ''}
      </SyntaxHighlighter>
      <div className="absolute right-3 top-3">
        <Tooltip content={'copy code'}>
          <Button isIconOnly>
            <IoCopyOutline />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default CodeBlock;

interface IProps {
  content?: any;
}

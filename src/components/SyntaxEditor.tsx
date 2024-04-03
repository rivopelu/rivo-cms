import { Button, Tooltip } from '@nextui-org/react';
import { IoCopyOutline } from 'react-icons/io5';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function SyntaxEditor() {
  const codeString = `
  public class Main {
  public static void main(String[] args) {
    short myNum = 5000;
    System.out.println(myNum);  
  }
}

    `;

  return (
    <div className="bg-default rounded-lg">
      <div className="p-3 px-5 flex justify-between items-center">
        <div>JSX.ts</div>

        <Button startContent={<IoCopyOutline />}>copy code</Button>
      </div>
      <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="html" style={atelierLakesideDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default SyntaxEditor;

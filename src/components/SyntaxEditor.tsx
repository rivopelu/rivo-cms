import { Button } from '@nextui-org/react';
import { IoCopyOutline } from 'react-icons/io5';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function SyntaxEditor() {
  const codeString = `sudo apt update && sudo apt upgrade    `;

  return (
    <div className="bg-default rounded-lg">
      <div className="p-3 px-5 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-[#FF5F57]"></div>
            <div className="w-4 h-4 rounded-full bg-[#FEBC2E]"></div>
            <div className="w-4 h-4 rounded-full bg-[#28C840]"></div>
          </div>
        </div>

        <Button startContent={<IoCopyOutline />}>copy code</Button>
      </div>
      <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="html" style={atelierLakesideDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default SyntaxEditor;

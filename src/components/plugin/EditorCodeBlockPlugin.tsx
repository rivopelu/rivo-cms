import { defaultProps } from '@blocknote/core';
import { createReactBlockSpec } from '@blocknote/react';

export const EditorCodeBlockPlugin = createReactBlockSpec(
  {
    type: 'codeBlock',
    content: 'inline',
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
    },
  },
  {
    render: (props) => {
      return <div className={'inline-content bg-slate-50/10 p-4 rounded-lg'} ref={props.contentRef} />;
    },
  },
);

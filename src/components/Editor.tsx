import {
  Block,
  BlockNoteSchema,
  BlockSchema,
  InlineContentSchema,
  StyleSchema,
  defaultBlockSpecs,
  filterSuggestionItems,
  insertOrUpdateBlock,
} from '@blocknote/core';
import { BlockNoteView, SuggestionMenuController, getDefaultReactSlashMenuItems, useCreateBlockNote } from '@blocknote/react';
import { FaCode } from 'react-icons/fa';
import { RiAlertFill } from 'react-icons/ri';
import { EditorCodeBlockPlugin } from './plugin/EditorCodeBlockPlugin';
import { AlertEditor } from './AlertEditor';

const schema = BlockNoteSchema.create({
  blockSpecs: {
    // Adds all default blocks.
    ...defaultBlockSpecs,
    // Adds the Alert block.
    alert: AlertEditor,
    codeBlock: EditorCodeBlockPlugin,
  },
});

// Slash menu item to insert an Alert block
const insertAlert = (editor: typeof schema.BlockNoteEditor) => ({
  title: 'Alert',
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: 'alert',
    });
  },
  aliases: ['alert', 'notification', 'emphasize', 'warning', 'error', 'info', 'success'],
  group: 'Other',
  icon: <RiAlertFill />,
});

const insertCodeBlock = (editor: typeof schema.BlockNoteEditor) => ({
  title: 'Code Block',
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: 'codeBlock',
    });
  },
  group: 'Other',
  icon: <FaCode />,
});
export default function Editor(props: IProps) {
  const editor = useCreateBlockNote({
    schema,
  });
  return (
    <BlockNoteView editor={editor} slashMenu={false} onChange={() => props.onChange(editor.document)}>
      <SuggestionMenuController
        triggerCharacter={'/'}
        getItems={async (query) =>
          filterSuggestionItems([...getDefaultReactSlashMenuItems(editor), insertAlert(editor), insertCodeBlock(editor)], query)
        }
      />
    </BlockNoteView>
  );
}

interface IProps {
  onChange: (e: any[]) => void;
}

export type IBlock = Block<any, any, any>[];

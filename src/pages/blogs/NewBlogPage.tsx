import { BlockNoteSchema, defaultBlockSpecs, filterSuggestionItems, insertOrUpdateBlock } from '@blocknote/core';
import { BlockNoteView, SuggestionMenuController, getDefaultReactSlashMenuItems, useCreateBlockNote } from '@blocknote/react';
import { Button } from '@nextui-org/react';
import { RiAlertFill } from 'react-icons/ri';
import { Alert } from '../../components/Alert';
import PageHeader from '../../components/PageHeader';
import SyntaxEditor from '../../components/SyntaxEditor';
import CodeBlock from '../../components/CodeBlock';
import { EditorCodeBlockPlugin } from '../../components/plugin/EditorCodeBlockPlugin';
import { FaCode } from 'react-icons/fa';

const schema = BlockNoteSchema.create({
  blockSpecs: {
    // Adds all default blocks.
    ...defaultBlockSpecs,
    // Adds the Alert block.
    alert: Alert,
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
function NewBlogPage() {
  const editor = useCreateBlockNote({
    schema,
    initialContent: [
      {
        type: 'paragraph',
        content: 'Welcome to this demo!',
      },
      {
        type: 'alert',
        content: 'This is an example alert',
      },
      {
        type: 'paragraph',
        content: "Press the '/' key to open the Slash Menu and add another",
      },
      {
        type: 'paragraph',
      },
    ],
  });
  function onSubmit() {
    const note = editor?.document;
    console.log(JSON.stringify(note));
  }
  return (
    <div className="grid gap-10">
      <PageHeader title="Add new blogs">
        <Button onPress={() => onSubmit()}>SUBMIT</Button>
      </PageHeader>
      <CodeBlock />
      <SyntaxEditor />
      <BlockNoteView editor={editor} slashMenu={false}>
        {/* Replaces the default Slash Menu. */}
        <SuggestionMenuController
          triggerCharacter={'/'}
          getItems={async (query) =>
            // Gets all default slash menu items and `insertAlert` item.
            filterSuggestionItems([...getDefaultReactSlashMenuItems(editor), insertAlert(editor), insertCodeBlock(editor)], query)
          }
        />
      </BlockNoteView>
    </div>
  );
}

export default NewBlogPage;

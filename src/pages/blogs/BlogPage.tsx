import { BlockNoteEditor } from '@blocknote/core';
import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import PageHeader, { IBreadcrumbsData } from '../../components/PageHeader';
import { ROUTES } from '../../routes/routes';
import { useEffect } from 'react';

export default function BlogPage() {
  const navigate = useNavigate();
  const editor: BlockNoteEditor | null = useCreateBlockNote();

  const data: any[] = [
    {
      id: '361d52a4-a455-4749-8061-8b34044bb981',
      type: 'heading',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
        level: 1,
      },
      content: [
        {
          type: 'text',
          text: 'HELLO WORLD',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: '9888a6d3-11bf-419e-9d1d-c0866f47a05c',
      type: 'paragraph',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [
        {
          type: 'text',
          text: 'apap kabar bare',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: 'f0776c9c-f725-42f4-a12e-ab585b1996fc',
      type: 'paragraph',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [],
      children: [],
    },
    {
      id: '7f2a3ab7-4b8f-457a-b4c6-ba806188fd37',
      type: 'heading',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
        level: 1,
      },
      content: [
        {
          type: 'text',
          text: 'HELLO WORLD',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: '833860cf-6f30-45db-8cf4-c499a824422e',
      type: 'paragraph',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [],
      children: [],
    },
  ];
  const breadCrumb: IBreadcrumbsData[] = [
    {
      title: 'Home',
      path: ROUTES.HOME(),
    },

    {
      title: 'Blogs',
    },
  ];

  useEffect(() => {
    async function loadInitialHTML() {
      if (editor) {
        editor.replaceBlocks(editor.document, data);
      }
    }
    loadInitialHTML();
  }, [editor]);
  return (
    <div>
      <PageHeader title="blogs List" breadcrumbs={breadCrumb}>
        <Button onPress={() => navigate(ROUTES.BLOG.NEW_BLOG())}>Create New Blog</Button>
      </PageHeader>
      <BlockNoteView editor={editor} editable={false} />
    </div>
  );
}

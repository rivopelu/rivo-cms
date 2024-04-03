import { ReactNode } from 'react';
import { PAGE_TYPE_ENUM } from '../enums/PageTypeEnums';
import Sidebar from './Sidebar';
import { PageContainer } from './PageContainer';

export default function BasePage(props: IProps) {
  if (props.type === PAGE_TYPE_ENUM.FULL_PAGE) {
    return <>{props.children}</>;
  } else {
    return (
      <div className="flex">
        <Sidebar />
        <PageContainer className="mt-10">{props.children}</PageContainer>
      </div>
    );
  }
}

interface IProps {
  children: ReactNode;
  type: PAGE_TYPE_ENUM;
}

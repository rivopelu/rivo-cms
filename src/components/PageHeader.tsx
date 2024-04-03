import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader(props: IProps) {
  return (
    <div className="w-full capitalize flex justify-between">
      <div>
        <h1>{props.title}</h1>
        {props.breadcrumbs && (
          <Breadcrumbs underline="active" className="mt-1">
            {props.breadcrumbs.map((e, i) => (
              <BreadcrumbItem key={i}>
                <Link to={e.path || ''}>{e.title}</Link>
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        )}
      </div>
      <div>{props.children}</div>
    </div>
  );
}

interface IProps {
  children?: ReactNode;
  title: string;
  breadcrumbs?: IBreadcrumbsData[];
}

export interface IBreadcrumbsData {
  title: string;
  path?: string;
}

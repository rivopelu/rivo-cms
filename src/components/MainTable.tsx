import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { Fragment } from 'react';

export function MainTable(props: IProps) {
  return (
    <Table hideHeader={props.hideHeader} aria-label="Example static collection table">
      <TableHeader>
        {props.columns &&
          props.columns.map((item, i) => (
            <TableColumn className="bg-slate-50/10" key={i}>
              {item.headerTitle}
            </TableColumn>
          ))}
      </TableHeader>

      <TableBody>
        {props.data &&
          props.data.map((item, i) => (
            <TableRow key={i}>
              {props.columns.map((c, id) => (
                <TableCell
                  key={id}
                  scope="row"
                  align={c.align}
                  className={`${i + 1 !== props.data.length ? 'border-b border-b-slate-200/5 ' : ' '} py-7`}
                >
                  {props.columns.map((e, index) => {
                    if (e.key === c.key) {
                      return <Fragment key={index}>{e.layouts ? e.layouts(item, i) : item[e.value ?? '']}</Fragment>;
                    }
                  })}
                </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

interface IProps {
  data: any[];
  hideHeader?: boolean;
  loading?: boolean;
  columns: ITableColumnData[];
}

export interface ITableColumnData {
  sort?: boolean;
  headerTitle?: string;
  headerClassName?: string;
  value?: string;
  key: string;
  className?: string;
  layouts?: (data?: any, index?: number) => any;
  loadingComponents?: any;
  paddingNone?: boolean;
  onSort?: (e: any) => void;
  align?: 'left' | 'center' | 'right' | 'justify' | 'char';
}

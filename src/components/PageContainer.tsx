import { ReactNode } from 'react';

export function PageContainer(props: IProps) {
  return (
    <div
      className={`${props.size === 'large' ? 'lg:px-16 w-full px-6' : 'w-full px-4 lg:px-0 max-w-7xl mx-auto'} h-full ${props.className || ' '}`}
    >
      {props.children}
    </div>
  );
}

interface IProps {
  size?: 'normal' | 'large';
  children: ReactNode;
  className?: string;
}

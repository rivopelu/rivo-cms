import { Modal, ModalContent, ModalHeader } from '@nextui-org/react';
import { ReactNode } from 'react';

export default function ModalPopup(props: IProps) {
  return (
    <Modal size={'2xl'} backdrop={'blur'} isOpen={props.open} onClose={props.onClose}>
      <ModalContent className={'bg-default'}>
        <>
          {props.title && (
            <ModalHeader className="flex flex-col gap-1 border-b border-b-slate-300/10 capitalize">
              <div className="text-xl">{props.title}</div>
            </ModalHeader>
          )}
          {props.body ? props.body : <></>}
        </>
      </ModalContent>
    </Modal>
  );
}

interface IProps {
  open?: boolean;
  onClose?: () => void;
  body?: ReactNode;
  title?: string;
}

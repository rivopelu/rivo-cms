import { Input } from '@nextui-org/input';
import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export function InputText(props: IProps) {
  return (
    <Input
      className={'bg-default'}
      name={props.name}
      id={props.name}
      color={props.errorMessage ? 'danger' : 'default'}
      type={props.type}
      errorMessage={props.errorMessage || ''}
      isRequired={props.required}
      isInvalid={!!props.errorMessage}
      required={props.required}
      labelPlacement={'outside'}
      value={props.value}
      variant={'bordered'}
      label={props.label}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

interface IProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<any>;
  onBlur?: any;
  name?: string;
  errorMessage?: any;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

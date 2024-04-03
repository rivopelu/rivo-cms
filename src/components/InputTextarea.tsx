import { Textarea } from '@nextui-org/react';
import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export function InputTextArea(props: IProps) {
  return (
    <Textarea
      name={props.name}
      id={props.name}
      color={props.errorMessage ? 'danger' : 'default'}
      type={props.type}
      errorMessage={props.errorMessage || ''}
      isRequired={props.required}
      isInvalid={!!props.errorMessage}
      required={props.required}
      labelPlacement={'outside'}
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
}

import { Select, SelectItem } from '@nextui-org/react';
import { ILabelValue } from '../models/ILabelValue.ts';
import { HTMLInputTypeAttribute } from 'react';

export default function InputSelectMultiple(props: IProps) {
  return (
    <Select
      name={props.name}
      id={props.name}
      className={'bg-default'}
      selectionMode={'multiple'}
      color={props.errorMessage ? 'danger' : 'default'}
      errorMessage={props.errorMessage || ''}
      isRequired={props.required}
      isInvalid={!!props.errorMessage}
      required={props.required}
      labelPlacement={'outside'}
      value={props.value}
      variant={'bordered'}
      label={props.label}
      placeholder={props.placeholder}
      onSelectionChange={(e) => props.onChange && props.onChange(Array.from(new Set(e)) as string[])}
    >
      {props.data.map((animal) => (
        <SelectItem key={animal.value} value={animal.value}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
  );
}

interface IProps {
  data: ILabelValue<any>[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: string[]) => void;
  onBlur?: any;
  name?: string;
  errorMessage?: any;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

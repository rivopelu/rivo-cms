import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { ILabelValue } from '../models/ILabelValue';
import { HTMLInputTypeAttribute } from 'react';

function InputAutocomplete(props: IProps) {
  return (
    <>
      <Autocomplete
        label={props.label}
        name={props.name}
        multiple={true}
        id={props.name}
        color={props.errorMessage ? 'danger' : 'default'}
        errorMessage={props.errorMessage || ''}
        isRequired={props.required}
        isInvalid={!!props.errorMessage}
        required={props.required}
        labelPlacement={'outside'}
        value={props.value}
        variant={'bordered'}
        placeholder={props.placeholder}
        // onSelectionChange={(e: any) => props.onChange && e && props.onChange(props.data[e].value)}
        onSelectionChange={(e: any) => console.log(e)}
      >
        {props.data.map((item, i) => (
          <AutocompleteItem variant={'solid'} key={i} value={item.value}>
            {item.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </>
  );
}

export default InputAutocomplete;

interface IProps {
  data: ILabelValue<any>[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: string) => void;
  onBlur?: any;
  name?: string;
  errorMessage?: any;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

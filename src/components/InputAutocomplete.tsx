import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { ILabelValue } from '../models/ILabelValue';

function InputAutocomplete(props: IProps) {
  return (
    <>
      <Autocomplete label="Select an animal" className="max-w-xs">
        {props.data.map((item, i) => (
          <AutocompleteItem key={i} value={item.value}>
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
}

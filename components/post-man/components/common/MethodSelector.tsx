import { useSelector, RootStateOrAny } from 'react-redux';
import Select, { SelectValue } from '../InputBase/Select';
import { useState } from 'react';

export default function MethodSelector() {
  const options = useSelector((state: RootStateOrAny) => state.methods.options);
  const [selectValue, setSelectValue] = useState(options[0]);
  const onSelectChange = (value: SelectValue, name: string) => {
    setSelectValue(() => value);
  };
  return (
    <div className='w-28'>
      <Select
        options={options}
        onChange={onSelectChange}
        value={selectValue}
        id='method-selector'
        name='method'
        placeholder='Method'
        containerBorderRadius={5}
      />
    </div>
  );
}

import { useSelector, RootStateOrAny } from 'react-redux';
import Select, { SelectValue } from '../InputBase/Select';
import { useState } from 'react';
import {
  withPreferTheme,
  ThemeSchema,
} from '../../../../context/prefer-theme/withPreferTheme';

import { useFormikContext } from 'formik';

type Props = {
  themeModeState: ThemeSchema;
};
function MethodSelector({ themeModeState }: Props) {
  const { setFieldValue } = useFormikContext();
  const name = 'method';
  const options = useSelector((state: RootStateOrAny) => state.methods.options);
  const [selectValue, setSelectValue] = useState(options[0]);
  const onSelectChange = (value: SelectValue, name: string) => {
    setSelectValue(() => value);
    setFieldValue(name, value);
  };
  const { theme } = themeModeState;
  return (
    <div className='w-24'>
      <Select
        options={options}
        onChange={onSelectChange}
        value={selectValue}
        id='method-selector'
        name='method'
        placeholder='Method'
        containerBorderRadius={5}
        primaryColor={theme === 'light' ? undefined : '#DB2777'}
        secondaryColor={theme === 'light' ? undefined : '#F9A8D4'}
        optionColor={theme === 'light' ? undefined : '#F9FAFB'}
        textColor={theme === 'light' ? undefined : '#F9FAFB'}
        className='shadow-md text-gray-300'
        boxBackgroundColor={theme === 'light' ? undefined : '#1F2937'}
        indicatorColor={theme === 'light' ? undefined : '#EEF2FF'}
        menuBgColor={theme === 'light' ? '#fff' : '#4B5563'}
      />
    </div>
  );
}
export default withPreferTheme(MethodSelector);

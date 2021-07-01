import Select, { SelectValue } from '../InputBase/Select';
import { useState } from 'react';
import { withPreferTheme, ThemeSchema } from '../../../../context/prefer-theme/withPreferTheme';
import { v4 } from 'uuid';
import { useFormikContext } from 'formik';

const listHeaders: SelectValue[] = [
  { label: 'Accept', value: 'Accept' },
  { label: 'Accept-Charset', value: 'Accept-Charset' },
  { label: 'User-Agent', value: 'User-Agent' },
  { label: 'Origin', value: 'Origin' },
  { label: 'Accept-Datetime', value: 'Accept-Datetime' },
  { label: 'Accept-Language', value: 'Accept-Language' },
  { label: 'Cache-Control', value: 'Cache-Control' },
  { label: 'Connection', value: 'Connection' },
  { label: 'Content-Encoding', value: 'Accept-Charset' },
  { label: 'Content-Length', value: 'Content-Length' },
  { label: 'Content-Type', value: 'Content-Type' },
  { label: 'Upgrade-Insecure-Requests', value: 'Upgrade-Insecure-Requests' },
  { label: 'Upgrade', value: 'Upgrade' },
  { label: 'Transfer-Encoding', value: 'Transfer-Encoding' },
  { label: 'Authorization', value: 'Authorization' },
];

type Props = {
  themeModeState: ThemeSchema;
};
function MethodSelector({ themeModeState }: Props) {
  const { setFieldValue } = useFormikContext();
  const [selectValue, setSelectValue] = useState<undefined | SelectValue>(undefined);
  const onSelectChange = (value: SelectValue, name: string) => {
    setSelectValue(() => value);
    setFieldValue(name, value);
  };
  const { theme } = themeModeState;
  return (
    <div className='w-40'>
      <Select
        options={listHeaders}
        onChange={onSelectChange}
        value={selectValue}
        id={v4()}
        name='method'
        placeholder='Headers'
        labelColor='#9CA3AF'
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

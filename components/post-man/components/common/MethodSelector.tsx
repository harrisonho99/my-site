import { useSelector, RootStateOrAny } from 'react-redux';
import { grey, blueGrey, blue, lightBlue } from '@material-ui/core/colors';
import Select from '../InputBase/Select';

export default function MethodSelector() {
  const options = useSelector((state: RootStateOrAny) => state.methods.options);
  const onSelectChange = () => {};
  return (
    <div className='w-28'>
      <Select
        options={options}
        onChange={onSelectChange}
        id='method-selector'
        name='method'
        placeholder='Method'
        boxBackgroundColor={grey[300]}
        indicatorColor={blue[900]}
        menuBgColor={grey[100]}
        textColor={blue[900]}
        primaryColor={blue[300]}
        secondaryColor={blue[100]}
      />
    </div>
  );
}

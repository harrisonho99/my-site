import Select from 'react-select';
import { grey, blue, indigo } from '@material-ui/core/colors';

type SelectValue = {
  value: any;
  label: string;
};
type Color = string;
interface Props {
  options: SelectValue[];
  onChange?: (value: SelectValue, name: string) => void;
  defaultValue?: SelectValue;
  value?: SelectValue;
  containerBorderRadius?: number;
  className?: string;
  id: string;
  containerHeight?: number;
  name: string;
  placeholder?: string;
  primaryColor?: Color;
  secondaryColor?: Color;
  optionColor?: Color;
  borderColor?: Color;
  valueContainerCorlor?: Color;
  menuBgColor?: Color;
  indicatorColor?: Color;
  labelColor?: Color;
  textColor?: Color;
  boxBackgroundColor?: Color;
}
export default function CustomSelect({
  onChange = () => {},
  options = [],
  defaultValue,
  name,
  id,
  placeholder,
  value,
  labelColor,
  containerBorderRadius = 6,
  className,
  containerHeight = 40,
  borderColor = 'transparent',
  optionColor = grey[700],
  valueContainerCorlor = grey[700],
  boxBackgroundColor = grey[200],
  indicatorColor = blue[900],
  menuBgColor = grey[100],
  textColor = blue[900],
  primaryColor = indigo[400],
  secondaryColor = indigo[100],
}: Props) {
  const onSelectChange = (value: SelectValue) => {
    if (typeof onChange === 'function') {
      onChange(value, name);
    }
  };
  return (
    <Select
      placeholder={placeholder}
      className={className}
      defaultValue={defaultValue}
      value={value}
      options={options}
      inputId={id}
      onChange={onSelectChange as any}
      styles={{
        placeholder: (base) => ({ ...base, color: labelColor }),
        singleValue: (base) => ({ ...base, color: textColor, border: 'none' }),
        control: (base) => {
          return {
            ...base,
            border: `solid 1px ${borderColor}`,
            '&:hover': {
              borderColor,
              outline: 'none',
            },
            borderRadius: containerBorderRadius,
            '&:focus': { borderColor: 'transparent', outline: 'none' },
            height: containerHeight,
            color: textColor,
            backgroundColor: boxBackgroundColor,
          };
        },
        container: (base) => ({
          ...base,
          '&:focus': {
            borderColor: 'transparent',
            outline: 'none',
            color: optionColor,
          },
          color: optionColor,
        }),
        menu: (base) => ({
          ...base,
          borderRadius: containerBorderRadius,
          overflow: 'hidden',
          paddingTop: 4,
          paddingBottom: 4,
          color: optionColor,
          backgroundColor: menuBgColor,
          zIndex: 60,
        }),
        indicatorsContainer: (base) => ({
          ...base,
          outline: 'none',
          border: 'none',
          color: indicatorColor,
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: indicatorColor,
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: 'none',
        }),
        valueContainer: (base) => ({
          ...base,
          padding: '2px 4px',
          color: valueContainerCorlor,
        }),
      }}
      theme={(theme) => {
        return {
          ...theme,
          colors: {
            ...theme.colors,
            primary25: secondaryColor,
            primary50: secondaryColor,
            primary: primaryColor,
          },
        };
      }}
    />
  );
}
export type { SelectValue };

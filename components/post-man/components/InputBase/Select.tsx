import Select from 'react-select';

type SelectValue = {
  value: any;
  label: string;
};
type Color = string | undefined;
interface Props {
  options: SelectValue[];
  onChange: (value: SelectValue, name: string | undefined) => void;
  defaultValue?: SelectValue;
  value: SelectValue;
  containerBorderRadius: number;
  className: string;
  id: string;
  containerHeight: number;
  name: string;
  placeholder?: string;
  primaryColor: Color;
  secondaryColor: Color;
  optionColor: Color;
  borderColor: Color;
  valueContainerCorlor: Color;
  menuBgColor: Color;
  indicatorColor: Color;
  labelColor: Color;
  boxColor: Color;
  boxBackgroundColor: Color;
}

export default function CustomSelect({
  onChange,
  options = [],
  defaultValue,
  primaryColor = 'white',
  secondaryColor = 'orange',
  optionColor = 'black',
  name,
  id,
  placeholder,
  value,
  boxBackgroundColor,
  boxColor,
  labelColor,
  borderColor = 'transparent',
  valueContainerCorlor = 'black',
  menuBgColor = 'white',
  indicatorColor = 'black',
  containerBorderRadius = 3,
  className,
  containerHeight = 42,
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
        singleValue: (base) => ({ ...base, color: boxColor, border: 'none' }),
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
            color: boxColor,
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
        valueContainer: (base) => ({ ...base, color: valueContainerCorlor }),
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

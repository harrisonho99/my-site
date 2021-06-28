import type { SelectValue } from '../../InputBase/Select';

type Options = SelectValue[];

type Props = {
  options: Options;
};

interface FormValues {
  baseURL: string;
  method: SelectValue;
}

export type { Options, Props, FormValues, SelectValue };

import type { SelectValue } from '../../InputBase/Select';
import { EnhanceAction } from '../../../state-manager/schema/type';
type Options = SelectValue[];

type Props = {
  options: Options;
  turnOffLoader: () => {};
  turnOnLoader: () => {};
  setResponseView: (data: any) => {};
};

interface FormValues {
  baseURL: string;
  method: SelectValue;
}

export type { Options, Props, FormValues, SelectValue };

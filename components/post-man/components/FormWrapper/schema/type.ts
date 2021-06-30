import type { SelectValue } from '../../InputBase/Select';
import { EnhanceAction } from '../../../state-manager/schema/type';
type Options = SelectValue[];

type Props = {
  options: Options;
  hideLoader: () => {};
  showLoader: () => {};
  setResponseView: (data: any) => {};
};

interface FormValues {
  baseURL: string;
  method: SelectValue;
}

export type { Options, Props, FormValues, SelectValue };

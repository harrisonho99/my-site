import { FormValues, SelectValue } from './type';

class InitialFormValue implements FormValues {
  constructor(public method: SelectValue, public baseURL: string) {}
}

export { InitialFormValue };

import { PureComponent } from 'react';
import {
  PreferThemeProviderProps,
  PreferThemeProviderState,
} from './schema/type';
import { Theme } from './preferThemeContext';
export default class PreferThemeProvider extends PureComponent<
  PreferThemeProviderProps,
  PreferThemeProviderState
> {
  constructor(props: PreferThemeProviderProps) {
    super(props);
  }
  render = () => {
    const { children, value } = this.props;
    return <Theme.Provider value={value}>{children}</Theme.Provider>;
  };
}

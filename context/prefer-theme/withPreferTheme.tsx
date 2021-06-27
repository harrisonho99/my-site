import { PureComponent, Component, FC } from 'react';
import { Theme } from './preferThemeContext';
import { ThemeSchema } from './schema/type';
interface withPreferThemeState {
  comsumerState: object;
}

export function withPreferTheme(
  ConnectedComponent: FC | typeof Component | any
) {
  return class ThemeConsumer extends PureComponent<any, withPreferThemeState> {
    constructor(props: any) {
      super(props);
      this.state = { comsumerState: {} };
    }
    listenStateChange = () => {};
    componentWillUnmount = () => {};
    render() {
      return (
        <Theme.Consumer>
          {(themeModeState) => {
            return (
              <ConnectedComponent
                {...this.props}
                themeModeState={themeModeState}
              />
            );
          }}
        </Theme.Consumer>
      );
    }
  };
}

export type { ThemeSchema };

import { PureComponent, Component, FC } from 'react';
import { Theme } from './preferThemeContext';
import { ThemeSchema } from './schema/type';
interface withPreferThemeState {
  subscribe?: (updater: () => void) => void;
}

export function withPreferTheme(
  ConnectedComponent: FC | typeof Component | any
) {
  return class ThemeConsumer extends PureComponent<any, withPreferThemeState> {
    constructor(props: any) {
      super(props);
      this.state = { subscribe: undefined };
    }

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

import { ReactElement } from 'react';

type themePreference = 'dark' | 'light';
type subscriber = (theme: themePreference) => void;
interface ThemeSchema {
  event: any;
  theme: themePreference;
  subscribers: subscriber[];
  dispatchChangeThemeSchema: (theme: themePreference) => void;
  onDispatchChangeTheme: (cb: (theme: themePreference) => void) => void;
  subscribe: (subscriber: subscriber) => () => void;
}
interface PreferThemeProviderProps {
  children: ReactElement;
  value: ThemeSchema;
}

interface PreferThemeProviderState {
  theme: themePreference;
}
export type {
  ThemeSchema,
  PreferThemeProviderProps,
  PreferThemeProviderState,
  themePreference,
  subscriber,
};

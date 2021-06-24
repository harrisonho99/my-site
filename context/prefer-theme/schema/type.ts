import { ReactElement } from 'react';
type themePreference = 'dark' | 'light';

interface ThemeSchema {
  theme: themePreference;
  dispatchChangeThemeSchema: (theme: themePreference) => void;
  onDispatchChangeTheme: (cb: () => void) => void;
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
};

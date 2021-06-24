import type { ThemeSchema, themePreference } from './schema/type';
class PreferTheme implements ThemeSchema {
  public theme: themePreference;
  constructor(defaultTheme: themePreference) {
    this.theme = defaultTheme;
  }
  dispatchChangeThemeSchema = (theme: themePreference) => {
    this.theme = theme;
  };
  onDispatchChangeTheme = (cb: (theme: themePreference) => void) => {
    cb(this.theme);
  };
}

const ThemeState = new PreferTheme('dark');
export { ThemeState, PreferTheme };

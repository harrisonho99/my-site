import type { ThemeSchema, themePreference } from './schema/type';
class PreferTheme implements ThemeSchema {
  public theme: themePreference;
  constructor(defaultTheme: themePreference) {
    this.theme = defaultTheme;
  }
  dispatchChangeThemeSchema = (theme: themePreference) => {
    this.theme = theme;
  };
  onDispatchChangeTheme = (theme: themePreference) => {};
}

const ThemeState = new PreferTheme('light');
export { ThemeState, PreferTheme };

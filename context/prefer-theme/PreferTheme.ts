import type { ThemeSchema, themePreference, subscriber } from './schema/type';
class PreferTheme implements ThemeSchema {
  public theme: themePreference;
  public subscribers: subscriber[] = [];
  static CHANGE_THEME = 'CHANGE_THEME';
  public event: any;
  constructor(defaultTheme: themePreference) {
    this.theme = defaultTheme;
  }
  dispatchChangeThemeSchema = (theme: themePreference) => {
    this.theme = theme;
    this.subscribers.forEach((subs) => {
      subs(this.theme);
    });
    this.event = new CustomEvent(PreferTheme.CHANGE_THEME, {
      detail: {
        theme: this.theme,
      },
    });
    document.dispatchEvent(this.event);
  };
  onDispatchChangeTheme = (cb: (theme: themePreference) => void) => {
    cb(this.theme);
  };
  subscribe = (subscriber: subscriber) => {
    this.subscribers.push(subscriber);
    return () => {
      this.subscribers = this.subscribers.filter((s) => s !== subscriber);
    };
  };
}

const ThemeState = new PreferTheme('dark');
export { ThemeState, PreferTheme };

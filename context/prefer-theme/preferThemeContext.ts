import { createContext } from 'react';
import { ThemeState } from './PreferTheme';
const Theme = createContext(ThemeState);
Theme.displayName = 'PreferThemeMode';
export { Theme };

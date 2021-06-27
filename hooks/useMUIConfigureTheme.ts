import { createMuiTheme } from '@material-ui/core/styles';
import { useMemo, useState, useEffect } from 'react';
import { subscriber } from '../context/prefer-theme/schema/type';
type ThemeMode = 'light' | 'dark';
export function useMUIConfigureTheme(
  themeMode: ThemeMode = 'dark',
  subscribe: any
) {
  const [mode, setMode] = useState<ThemeMode>(themeMode);
  useEffect(() => {
    const toggleMUItheme = (theme: ThemeMode) => {
      setMode(theme);
    };
    const unSubscribeTheme = subscribe(toggleMUItheme);

    return unSubscribeTheme;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'dark',
          text: {
            primary: mode === 'light' ? '#312E81' : '#EEF2FF',
            secondary: mode === 'light' ? '#FBBF24' : '#EEF2FF',
          },
          primary: {
            main: mode === 'light' ? '#312E81' : '#EEF2FF',
          },
          secondary: {
            main: mode === 'light' ? '#D97706' : '#FFFBEB',
          },
          error: {
            main: '#DC2626',
          },
          background: {
            default: '#F3F4F6',
            paper: mode === 'light' ? '#F3F4F6' : '#1F2937',
          },
        },
      }),
    [mode]
  );
  return theme;
}

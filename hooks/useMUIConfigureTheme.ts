import { createMuiTheme } from '@material-ui/core/styles';
import { useMemo, useState, useEffect } from 'react';

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
          type: mode,
          text: {
            primary: mode === 'light' ? '#312E81' : '#EEF2FF',
            secondary: mode === 'light' ? '#FBBF24' : '#F3F4F6',
          },
          primary: {
            main: mode === 'light' ? '#4338CA' : '#BE185D',
          },
          secondary: {
            main: mode === 'light' ? '#F3F4F6' : '#1F2937',
          },
          error: {
            main: '#DC2626',
          },
          background: {
            default: mode === 'light' ? '#F3F4F6' : '#1F2937',
            paper: mode === 'light' ? '#F3F4F6' : '#1F2937',
          },
        },
      }),
    [mode]
  );
  return theme;
}

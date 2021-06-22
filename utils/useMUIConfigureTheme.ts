import { useTheme } from '@material-ui/core';
export function useMUIConfigureTheme() {
  const theme = useTheme();
  theme.palette.primary.main = '#ffa733';
  theme.palette.primary.dark = '#ffa733';
  theme.palette.primary.light = '#ffa733';
  theme.palette.text.primary = 'white';
  theme.palette.background.default = 'transparent';
  theme.palette.background.paper = 'transparent';
  return theme;
}

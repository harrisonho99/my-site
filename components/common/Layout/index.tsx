import type { LayoutProps } from './schema/type';
import { withPreferTheme } from '../../../context/prefer-theme/withPreferTheme';
import { FC, useLayoutEffect } from 'react';
const Layout: FC<LayoutProps> = ({ children, themeModeState }) => {
  useLayoutEffect(() => {
    const HMTLElement = document.querySelector('html')!;
    HMTLElement.classList.add(themeModeState.theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};
export default withPreferTheme(Layout);

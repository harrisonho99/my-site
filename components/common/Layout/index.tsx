import type { LayoutProps } from './schema/type';
import { withPreferTheme } from '../../../context/prefer-theme/withPreferTheme';
import { FC, useLayoutEffect } from 'react';
import type { themePreference } from '../../../context/prefer-theme/schema/type';
import Header from '../Header';
import Footer from '../Footer';
const Layout: FC<LayoutProps> = ({ children, themeModeState }) => {
  useLayoutEffect(() => {
    const HMTLNode = document.querySelector('html')!;
    const light: themePreference = 'light';
    const dark: themePreference = 'dark';
    if (
      !(HMTLNode.classList.contains(light) || HMTLNode.classList.contains(dark))
    ) {
      HMTLNode.classList.add(themeModeState.theme);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default withPreferTheme(Layout);

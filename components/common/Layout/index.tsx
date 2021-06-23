import type { LayoutProps } from './schema/type';
import { withPreferTheme } from '../../../context/prefer-theme/withPreferTheme';
import { FC } from 'react';
const Layout: FC<LayoutProps> = ({ children, themeModeState }) => {
  console.log('layout', themeModeState);
  return <>{children}</>;
};
export default withPreferTheme(Layout);

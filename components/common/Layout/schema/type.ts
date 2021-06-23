import { ReactElement } from 'react';
import { ThemeSchema } from '../../../../context/prefer-theme/schema/type';

type LayoutProps = {
  children: ReactElement;
  themeModeState: ThemeSchema;
};
export type { LayoutProps };

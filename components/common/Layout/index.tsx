import { ReactElement } from 'react';
type LayoutProps = {
    children: ReactElement;
};
export default function Layout({ children }: LayoutProps): ReactElement {
    return <>{children}</>;
}

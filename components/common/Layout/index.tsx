import type { LayoutProps } from "./schema/type"
import { ReactElement } from "react";
export default function Layout({ children }: LayoutProps): ReactElement {
    return <>{children}</>;
}

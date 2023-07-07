import { ReactNode } from "react";
import "../../Fonts/index.scss";
import "../../global.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <div className={"container"}>{children}</div>;
};

export default Layout;

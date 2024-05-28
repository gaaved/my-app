import HeaderMenu from "../HeaderMenu";
import { Content } from "./styles";

const Layout = ({ children }) => (
  <div>
    <HeaderMenu />
    <Content>{children}</Content>
  </div>
);

export default Layout;

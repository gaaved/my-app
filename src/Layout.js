import HeaderMenu from "./HeaderMenu";

const Layout = ({ children }) => (
  <div>
    <HeaderMenu />
    <div className="content">{children}</div>
  </div>
);

export default Layout;

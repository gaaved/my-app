import { Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HeaderMenu = () => {
  const location = useLocation();

  const [openKeys, setOpenKeys] = useState(["people"]);
  const allowedKeys = ["people", "planets", "starships"];
  const items = allowedKeys.map((key) => ({
    label: <Link to={`/${key}`}>{key[0].toUpperCase() + key.slice(1)}</Link>,
    key: `${key}`,
  }));

  useEffect(() => {
    setOpenKeys(location.pathname.substring(1));
  }, [location]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("isAuth", false);
    navigate("/");
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[openKeys]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
      <Button type="primary" onClick={logout}>
        Logout
      </Button>
    </Header>
  );
};

export default HeaderMenu;

import React from "react";
import {Button, Menu} from "antd";
import {Header} from "antd/es/layout/layout";
import {useLocation} from "react-router-dom";

const Routs = () => {
    const logout = () => {
        localStorage.setItem('isAuth', false);
        window.location.reload();
    };
    const location = useLocation();
    const allowedKeys = ['people', 'planets', 'starships'];


    const items = allowedKeys.map((key) => ({
        label: (
            <a href={`/${key}`}>
                {key[0].toUpperCase() + key.slice(1)}
            </a>
        ),
        key: `${key}`,
    }));

    return (
        <div id="sidebar">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[location.pathname.substring(1)]}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
                <Button type="primary" onClick={logout}>Logout</Button>
            </Header>
        </div>
    );
}

export default Routs;
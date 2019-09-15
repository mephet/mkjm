import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = props => {
    return (
        <Sider>
            <div className="logo" />
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <Menu.Item key="sorting">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2"><Link to="/sorting">Sorting</Link></Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar;
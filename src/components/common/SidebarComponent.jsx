import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Sider } = Layout;

const Sidebar = props => {
    return (
        <Sider>
            
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <Menu.Item key="sorting">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <SubMenu
                    key="sorting"
                    title={<span><Icon type="project" />Projects</span>}
                >
                    <Menu.Item key="4"><Link to="/sorting">Sorting</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar;
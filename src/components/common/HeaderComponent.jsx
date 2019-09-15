import React from 'react';
import { Link } from "react-router-dom";


import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent = props => {

    return (
        <Header>
            <Menu
                theme='dark'
                mode='horizontal'
            >
                <Menu.Item key="sorting">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">Github</Menu.Item>
            </Menu>
        </Header>
    )
}


export default HeaderComponent;
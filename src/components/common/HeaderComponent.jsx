import React from 'react';
import { Link } from "react-router-dom";


import { Layout, Menu, Icon, Typography } from 'antd';

const { Header } = Layout;
const { Text, Title } = Typography;

const HeaderComponent = props => {

    return (
        <Header>
            <div style={headerSplash}><span><Icon type="rocket" theme="twoTone" style={logoStyle} /><Title level={2} style={textStyle}>MKJMWorld</Title></span></div>
            <Menu
                theme='dark'
                mode='horizontal'
                style={headerItemsStyle}
            >
                <Menu.Item key="sorting">
                    <Link to="/">About</Link>
                </Menu.Item>
                <Menu.Item key="github">
                    <Link to="/">Github</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

const headerSplash = {
    display: 'inline-block',
    width: 300,
    margin: '16px 24px 16px 10px'
}

const textStyle = {
    color: 'white',
}

const headerItemsStyle = {
    lineHeight: '64px',
    float: 'right',
}

const logoStyle = {
    fontSize: '30px',
    // margin: '16px 24px 16px 24px',
    float: 'left',
}


export default HeaderComponent;
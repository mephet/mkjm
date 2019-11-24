import React from 'react';
import { Link } from "react-router-dom";


import { Layout, Menu, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import HeaderSplash from './HeaderSplash';

const { Header } = Layout;

const HeaderComponent = props => {

    return (
        <Header style={styles.headerStyle}>
            <HeaderSplash />
            <Menu
                theme='dark'
                mode='horizontal'
                style={styles.headerItemsStyle}
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
                <Menu.Item key="github">
                    <Link to="/">Github</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

const styles = {
    headerStyle: {
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerItemsStyle: {
        lineHeight: '64px',
        float: 'right',
    },
    
}


export default HeaderComponent;
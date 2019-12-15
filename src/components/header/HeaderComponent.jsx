import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import { Layout, Dropdown, Menu, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import HeaderSplash from './HeaderSplash';


const { Header } = Layout;

const HeaderComponent = props => {

    const [isDocked, setIsDocked] = useState(true);

    const onOpenChange = (...args) => {
        console.log(...args)
        setIsDocked(!isDocked)
    }

    const menu = (
        <Menu
            theme='dark'
            mode='horizontal'
            style={styles.headerItemsStyle}
        >

            <Menu.Item key="about">
                <Link to="/about">About</Link>
            </Menu.Item>

            <SubMenu
                key="sorting"
                title={<span><Icon type="project" />Projects</span>}
            >
                <Menu.Item key="sorting"><Link to="/sorting">Sorting</Link></Menu.Item>
                <Menu.Item key="physics"><Link to="/physics">Physics</Link></Menu.Item>
                <Menu.Item key="encryption"><Link to="/encryption">Encryption</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="github">
                <Link to="/">Github</Link>
            </Menu.Item>
        </Menu>
    )

    return (
        <div>
            <BrowserView>
                <Header style={styles.headerStyle}>
                    <HeaderSplash />
                    {menu}
                </Header>
            </BrowserView>
            <MobileView>
                <Header style={styles.headerStyle}>
                    <HeaderSplash />
                    <Dropdown style={styles.mobileStyles.dropdownStyle} overlay={menu} trigger={['click']}>
                        <Icon style={styles.mobileStyles.iconStyle} type="menu" />
                    </Dropdown>
                </Header>
            </MobileView>
        </div >
    )
}

const styles = {
    headerStyle: {
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerItemsStyle: {
        lineHeight: '64px',
        float: 'right',
    },
    mobileStyles: {
        dropdownStyle: {
            flex: 1
        },
        iconStyle: {
            color: 'white',
            fontSize: '20px'
        }
    }
}


export default HeaderComponent;
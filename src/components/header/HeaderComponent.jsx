import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { Layout, Menu, Icon, Drawer, Button } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import HeaderSplash from './HeaderSplash';


const { Header } = Layout;

const HeaderComponent = props => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mode = isMobile ? 'vertical' : 'horizontal';

    const routeToProjectsPage = () => {
        props.history.push(process.env.PUBLIC_URL + '/projects')

    }

    const toggleMobileMenuOpen = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    const menu = (
        <Menu
            theme='dark'
            mode={mode}
            style={styles.headerItemsStyle}
        >

            <Menu.Item key="about">
                <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
            </Menu.Item>

            <SubMenu
                key="project"
                onTitleClick={routeToProjectsPage}
                title={<span><Icon type="project" />Projects</span>}
            >
                <Menu.Item key="sorting"><Link to={process.env.PUBLIC_URL + "/projects/sorting"}>Sorting</Link></Menu.Item>
                <Menu.Item key="physics"><Link to={process.env.PUBLIC_URL + "/projects/physics"}>Physics</Link></Menu.Item>
                <Menu.Item key="rose"><Link to={process.env.PUBLIC_URL + "/projects/rose"}>Rose Function</Link></Menu.Item>
                <Menu.Item key="fourier"><Link to={process.env.PUBLIC_URL + "/projects/fourier"}>Fourier Series</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="github">
                <Link to={process.env.PUBLIC_URL + "/"}>Github</Link>
            </Menu.Item>
        </Menu>
    )

    const mobileMenu = (
        <Drawer
            title='Navigation'
            placement='left'
            closable={true}
            onClose={toggleMobileMenuOpen}
            visible={isMobileMenuOpen}
        >
            <Menu>
                <Menu.Item key="about">
                    <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
                </Menu.Item>
                <Menu.Item key="projects">
                    <Link to={process.env.PUBLIC_URL + "/projects"}>Projects</Link>
                </Menu.Item>
                <Menu.Item key="github">
                    <Link to={process.env.PUBLIC_URL + "/"}>Github</Link>
                </Menu.Item>
            </Menu>
        </Drawer>
    )

    return (
        <div>
            {mobileMenu}
            <BrowserView>
                <Header style={styles.headerStyle}>
                    <HeaderSplash />
                    {menu}
                </Header>
            </BrowserView>
            <MobileView>
                <Header style={styles.headerStyle}>
                    <HeaderSplash />
                    <Button
                        type="primary"
                        ghost
                        icon="menu"
                        style={styles.mobileStyles.buttonDrawerStyle}
                        onClick={toggleMobileMenuOpen} />
                </Header>
            </MobileView>
        </div >
    )
}

const styles = {
    headerStyle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 1,
    },
    headerItemsStyle: {
        lineHeight: '64px',
        float: 'right',
    },
    mobileStyles: {
        buttonDrawerStyle: {
            color: 'white',
        },
    }
}


export default withRouter(HeaderComponent);
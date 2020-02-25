import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import HomeComponent1 from './components/HomeComponent1';
import HomeComponent2 from './components/HomeComponent2';
import { Row, Col } from 'antd';


const Home = () => {
    const styles = {
        containerStyle: {
            marginTop: '64px',
            fontFamily: `'roboto', 'sans-serif'`,
            width: '100%',
        },
        mainPageContainer : {
            paddingTop: '5em',
            backgroundColor: '#001529'
        },
        p2Style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        p1ForeStyle: {
            opacity: 1
        },
    }

    return (
        <div style={styles.containerStyle}>
            <Row gutter={48} justify="space-around" style={styles.mainPageContainer} type="flex" align="middle">
                <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
                    <HomeComponent1 />
                </Col>
            </Row>
        </div>
    )

}

export default Home;
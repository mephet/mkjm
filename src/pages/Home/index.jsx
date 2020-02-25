import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import HomeComponent1 from './components/HomeComponent1';
import HomeComponent2 from './components/HomeComponent2';
import { Row, Col } from 'antd';


const Home = () => {
    const styles = {
        containerStyle: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginTop: '64px',
            fontFamily: `'roboto', 'sans-serif'`,
            width: '100%',
        },
        mainPageContainer: {
            paddingTop: '5vh',
            paddingBottom: '5vh',
            width: '100%',
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
            <Row gutter={48}  >
                <Col md={{ span: 18 }} sm={{ span: 24 }} style={styles.mainPageContainer} >
                    <HomeComponent1 />
                </Col>
            </Row>
            <HomeComponent2 />
        </div>
    )

}

export default Home;
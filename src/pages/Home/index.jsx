import React from 'react';
import HomeComponent1 from './components/HomeComponent1';
import HomeComponent2 from './components/HomeComponent2';
import { Row, Col } from 'antd';
import HomeComponent3 from './components/HomeComponent3';


const Home = () => {
    const styles = {
        containerStyle: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginTop: '64px',
            fontFamily: `'roboto', 'sans-serif'`,
            maxWidth: '100%',
        },
        mainPageContainer: {
            paddingTop: '5vh',
            paddingBottom: '5vh',
            width: '100%',
            backgroundColor: '#001529'
        },
        contentContainer: {
            backgroundColor: 'white',
            width: '100%'
        }
    }

    return (
        <div style={styles.containerStyle}>
            <Row>
                <Col md={{ span: 18 }} sm={{ span: 24 }} style={styles.mainPageContainer} >

                    <HomeComponent1 />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 18 }} sm={{ span: 24 }} style={styles.contentContainer} >
                    <HomeComponent2 />
                </Col>
            </Row>
            <Row type="flex" align="middle">
                <Col md={{ span: 18 }} sm={{ span: 24 }} style={styles.contentContainer} >
                    <HomeComponent3 />
                </Col>
            </Row>
        </div>
    )
}

export default Home;
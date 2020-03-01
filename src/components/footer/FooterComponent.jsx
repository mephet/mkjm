import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';


function FooterComponent() {

    const styles = {
        footerContainer: {
            width: '100%',
            // backgroundColor: 'white',
            backgroundColor: '#001529',
            paddingTop: '5vh',
            paddingBottom: '10vh'
        },
        textContainer: {
            color: 'white'
        },
        linksContainer: {
            display: 'flex',
            flexDirection: 'column'
        }
    }


    return (
        <Layout.Footer
            style={styles.footerContainer}
        >
            <Row gutter={[8, 48]}>
                <Col xs={24} sm={24} md={8} lg={8}>
                    <div >
                        <h3 style={styles.textContainer}>What is a PWA?</h3>
                        <p style={styles.textContainer}>A Progressive web app</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                    <div >
                        <h3 style={styles.textContainer}>Projects</h3>
                        <div style={styles.linksContainer}>
                            <Link to={process.env.PUBLIC_URL + '/projects/sorting'}>Sorting</Link>
                            <Link to={process.env.PUBLIC_URL + '/projects/fose'}>Rose Function</Link>
                            <Link to={process.env.PUBLIC_URL + '/projects/fourier'}>Fourier Series</Link>
                            <Link to={process.env.PUBLIC_URL + '/projects/poptimization'}>Portfolio Optimization</Link>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                    <div >
                        <h3 style={styles.textContainer}>Links</h3>
                        <div style={styles.linksContainer}>
                            <Link to={process.env.PUBLIC_URL + '/'}>Homepage</Link>
                            <Link to={process.env.PUBLIC_URL + '/projects/about'}>About Us</Link>
                            <Link to={process.env.PUBLIC_URL + '/projects'}>Projects</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Layout.Footer >
    )
}

export default FooterComponent;
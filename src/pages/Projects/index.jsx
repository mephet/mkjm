import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from "react-router-dom";

const Projects = () => {

    const styles = {
        containerStyle: {
            marginTop: '64px',
            padding: '1rem'
        },
        imgStyle: {
            maxWidth: '100%',
            height: '20em',
        }
    }


    return (
        <div style={styles.containerStyle}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Link to={process.env.PUBLIC_URL + '/projects/sorting'}>
                        <Card
                            title="Sorting"
                            bordered={true}
                            hoverable
                            cover={<img style={styles.imgStyle} alt="sorting card cover" src={process.env.PUBLIC_URL + '/resources/sorting_card_screen.jpg'}></img>}>
                            <p>A simple visualisation for sorting an array of elements using some popular sorting techniques</p>
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Link to={process.env.PUBLIC_URL + '/projects/rose'}>
                        <Card
                            title="Rose Function"
                            bordered={true}
                            hoverable
                            cover={<img style={styles.imgStyle} alt="rose card cover" src={process.env.PUBLIC_URL + '/resources/rose_card_screen.jpg'}></img>}>
                            <p>Deconstructing the mathematical properties of the Rhodonea curve also known as the Rose function</p>
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Link to={process.env.PUBLIC_URL + '/projects/fourier'}>
                        <Card
                            title="Fourier Series"
                            bordered={true}
                            hoverable>
                            <p>Visualising the fourier series.</p>
                    </Card>
                    </Link>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Link to={process.env.PUBLIC_URL + '/projects/physics'}>
                        <Card
                            title="Physics"
                            bordered={true}
                            hoverable>
                            <p>Physics.</p>
                    </Card>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default Projects;
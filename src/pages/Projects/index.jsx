import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from "react-router-dom";

const Projects = props => {

    const styles = {
        containerStyle: {
            marginTop: '64px',
            padding: '1rem'
        }
    }


    return (
        <div style={styles.containerStyle}>
            <Row gutter={16}>
                <Col span={8}>
                    <Link to='/projects/sorting'>
                        <Card
                            title="Sorting"
                            bordered={true}
                            hoverable
                            cover={<img alt="sorting card cover" src={process.env.PUBLIC_URL + '/resources/sorting_card_screen.jpg'}></img>}>
                            <p>A simple visualisation for sorting an array of elements using some popular sorting techniques</p>
                        </Card>
                    </Link>
                </Col>
                <Col span={8}>
                    <Card
                        title="Encryption"
                        bordered={true}
                        hoverable>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title="Sorting"
                        bordered={true}
                        hoverable>
                        Card content
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Projects;
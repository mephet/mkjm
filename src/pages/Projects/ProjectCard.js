import React from 'react';
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom';

function ProjectCard({ title, link, bg, description, alt }) {

    const styles = {
        cardStyle: {
            height: '50vh'
        },
        imgStyle: {
            maxWidth: '100%',
            height: '30vh',
        }
    }


    return (
        <Col xs={24} sm={12} md={8} lg={6}>
            <Link to={process.env.PUBLIC_URL + link}>
                <Card
                    style={styles.cardStyle}
                    title={title}
                    bordered={true}
                    hoverable
                    cover={<img style={styles.imgStyle} alt={alt} src={process.env.PUBLIC_URL + bg}></img>}>
                    <p>{description}</p>
                </Card>
            </Link>
        </Col>
    )
}

export default ProjectCard;
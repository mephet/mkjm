import React from 'react';
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {

    const { title, link, bg, description, alt } = props;

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
        <Col xs={24} sm={12} md={8} lg={6}>
            <Link to={process.env.PUBLIC_URL + link}>
                <Card
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
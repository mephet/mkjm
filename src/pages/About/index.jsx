import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const About = () => {

    const styles = {
        containerStyle: {
            marginTop: '64px',
        }
    }

    return (
        <div style={styles.containerStyle}>
            <Title>This is the about page</Title>
        </div>
    )

}

export default About;
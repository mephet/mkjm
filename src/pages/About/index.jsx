import React from 'react';
import { isMobile } from 'react-device-detect';

// const { Title, Text } = Typography;

const About = () => {

    const styles = {
        containerStyle: {
            marginTop: '64px',
            fontFamily: `'roboto', 'sans-serif'`,
            paddingTop: '5em',
            marginLeft: isMobile ? null : '20em',
            marginRight: isMobile ? null : '20em'
        },
        browserBodyStyle: {

        }
    }

    return (
        <div style={styles.containerStyle}>
            <h1>This is the about page</h1>
            <p></p>
        </div>
    )

}

export default About;
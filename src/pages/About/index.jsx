import React from 'react';
import { isMobile } from 'react-device-detect';

// const { Title, Text } = Typography;

function About() {

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
            <p>This is the about page</p>
        </div>
    )

}

export default About;
import React from 'react';
import { isMobile } from 'react-device-detect';

const HomeComponent1 = props => {

    return (
        <div style={styles.containerStyle}>
            <div style={styles.textContainer}>
                <h1 style={styles.textStyle}>The MKJM Progressive Web Application Project</h1>
                <h3 style={styles.textStyle2}>An experiment in building a modern fully functional Web Application.</h3>
            </div>
        </div>
    )
}

const styles = {
    containerStyle: {
        maxWidth: '100%',
    },
    textContainer: {
        width: isMobile ? '100%' : '40vw',
        paddingLeft: isMobile ? '5%' : '0%',
        paddingRight: isMobile ? '5%' : '0%',
    },
    textStyle: {
        flex: 2,
        fontWeight: 'bold',
        color: 'white',
        fontSize: '3rem',
    },
    textStyle2: {
        color: 'white',
        fontWeight: '350',
        fontSize: '1.5rem'
    }
}



export default HomeComponent1;
import React from 'react';
import Fade from 'react-reveal/Fade';
import { isMobile } from 'react-device-detect';

const HomeComponent2 = () => {

    const styles = {
        containerStyle: {
            paddingTop: '20vh',
            backgroundColor: 'white',
            width: '100%',
            paddingLeft: isMobile ? '5vw' : '15vw',
            paddingRight: isMobile ? '5vw' : '40vw',
        },
        spacer: {
            height: 2000,
            backgroundColor: 'pink'
        },
        h1Style: {
            fontSize: '2rem'
        },
        h2style: {
            fontSize: '1.4rem',
        }
    }

    return (
        <div style={styles.containerStyle}>
            <Fade bottom>
                <div>
                    <h1 style={styles.h1Style}>What is a PWA Application?</h1>
                    <h3 style={styles.h2style}>
                        A Progressive Web App uses modern web capabilities to deliver an experience to users that mirror that of a native mobile application.
                        </h3>
                    <h3>
                        At their heart, Progressive Web Apps are just web applications. Using progressive enhancement,
                            new capabilities are enabled in modern browsers. Using service workers and a web app manifest,
                            your web application becomes reliable and installable. If the new capabilities aren't available,
                            users still get the core experience.
                        </h3>
                </div>
            </Fade>
        </div>
    )
}

export default HomeComponent2;

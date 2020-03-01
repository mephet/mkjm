import React from 'react';
import FadeInComponent from '../../../components/FadeInComponent';
import { isMobile } from 'react-device-detect';
import { Icon } from 'antd';

const HomeComponent3 = () => {

    const styles = {
        containerStyle: {
            paddingTop: '20vh',
            paddingBottom: '400px',
            backgroundColor: 'white',
            width: '100%',
            paddingLeft: isMobile ? '5vw' : '15vw',
            paddingRight: isMobile ? '5vw' : '20vw',
        },
        liStyle: {
            display: 'inline-flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        h3Style: {
            display: 'inline-flex',
            fontSize: '1.2rem',
            verticalAlign: 'middle'
        },
        iconStyle: {
            display: 'inline-flex',
            fontSize: '1.2rem',
            verticalAlign: 'middle',
            paddingTop: '0.5vh',
            paddingRight: '1.8vw'
        }
    }

    return (

        < div style={styles.containerStyle} >
            <div >
            <FadeInComponent
                    delay={300}
                    fromY={300}
                    toY={0}
                >
                    <h1>As this application is still a work in progress, the following key attributes of a PWA have been fulfilled</h1>
                </FadeInComponent>
                <FadeInComponent
                    delay={300}
                    fromY={300}
                    toY={0}
                >
                    <div style={styles.liStyle}>
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={styles.iconStyle} />
                        <h3 style={styles.h3Style}>Progressive - Works for every user, regardless of browser choice.</h3>
                    </div>
                </FadeInComponent>
                <FadeInComponent
                    delay={300}
                    fromY={300}
                    toY={0}
                >
                    <div style={styles.liStyle}>
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={styles.iconStyle} />
                        <h3 style={styles.h3Style}>Responsive - Fits any form factor: desktop, mobile, tablet, or forms yet to emerge.</h3>
                    </div>
                </FadeInComponent>
                <FadeInComponent
                    delay={300}
                    fromY={300}
                    toY={0}
                >
                    <div style={styles.liStyle}>
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={styles.iconStyle} />
                        <h3 style={styles.h3Style}>Faster after initial loading - After the initial loading has finished, the same content and page elements do not have to be re-downloaded each time. </h3>
                    </div>
                </FadeInComponent>
                <FadeInComponent
                    delay={300}
                    fromY={300}
                    toY={0}
                >
                    <div style={styles.liStyle}>
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={styles.iconStyle} />
                        <h3 style={styles.h3Style}>Safe — Served via HTTPS to prevent snooping and ensure content hasn't been tampered with.</h3>
                    </div>
                </FadeInComponent>
                <FadeInComponent
                    delay={300}
                    fromY={300}
                    toY={0}
                >
                    <div style={styles.liStyle}>
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={styles.iconStyle} />
                        <h3 style={styles.h3Style}>Linkable — Can easily be shared via a URL, and does not require complex installation.</h3>
                    </div>
                </FadeInComponent>
                <FadeInComponent
                    delay={300}
                    fromY={300}
                    toY={0}
                >
                    <div style={styles.liStyle}>
                        <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" style={styles.iconStyle} />
                        <h3 style={styles.h3Style}>Discoverable — Identifiable as an “application” by search engines.</h3>
                    </div>
                </FadeInComponent>
                <FadeInComponent
                    delay={300}
                    fromY={300}
                    toY={0}
                >
                    <div style={styles.liStyle}>
                        <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" style={styles.iconStyle} />
                        <h3 style={styles.h3Style}>Connectivity independent — Service workers allow offline uses, or on low quality networks.</h3>
                    </div>
                </FadeInComponent>
            </div>
        </div >
    )
}

export default HomeComponent3;
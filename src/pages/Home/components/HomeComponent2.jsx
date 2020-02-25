import React from 'react';
import { Card } from 'antd';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops';
import FadeInComponent from '../../../components/FadeInComponent';


const HomeComponent2 = () => {

    const styles = {
        containerStyle: {
            backgroundColor: 'pink',
            minHeight: 400,
            width: '100%',
            clear: 'both'
        },
        spacer: {
            height: 2000,
            backgroundColor: 'pink'
        },
        h2styles: {
            fontSize: '82px'
        }
    }

    return (
        <div styles={styles.containerStyle}>
            <div style={styles.spacer}>
                TEST
            </div>
            <FadeInComponent
                style={{ height: 3000 }}
                delay={1500}
                fromY={-400}
                toY={0}
            >
                <p>Testaksdifhaoisdfuhdos</p>
            </FadeInComponent>
            <div style={styles.spacer}>
                TEST
            </div>
        </div>
    )
}

export default HomeComponent2;

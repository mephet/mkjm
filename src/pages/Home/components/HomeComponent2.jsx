import React from 'react';
import { Card } from 'antd';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops';
import FadeInComponent from '../../../components/FadeInComponent';


const HomeComponent2 = () => {

    const styles = {
        containerStyle: {

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
            <div style={{
                height: 2000,
                backgroundColor: 'white',
            }}>
                <FadeInComponent
                    delay={300}
                    fromY={300}
                    toY={0}
                >
                    <h2>We keep an active boolean flag in the component state. When the element first comes into view, and the once prop is true, we change the active state to false. By doing that, we turn off the sensor by passing to the active prop a value of false.</h2>
                </FadeInComponent>
            </div>

            <div style={styles.spacer}>
                TEST
            </div>
        </div>
    )
}

export default HomeComponent2;

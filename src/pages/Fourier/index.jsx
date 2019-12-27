import React, { useState } from 'react';
import Sketch from 'react-p5'
import { isMobile } from 'react-device-detect';

import FourierSeries from './sketch';

const Fourier = () => {

    const [fourierSketch, setFourierSketch] = useState(new FourierSeries());

    function handleResize() {
        // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
        setFourierSketch()
    }

    const styles = {
        containerStyle: {
            marginTop: '64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            marginLeft: isMobile ? '10%' : '20%',
            marginRight: isMobile ? '10%' : '20%'
        },
        canvasContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        sliderStyle: {
            flex: 1,
        },
        canvasStyle: {
            flex: 1,
            marginTop: '2em'
        }
    }

    return (
        <div style={styles.containerStyle}>
            <div style={styles.canvasContainerStyle}>
                <Sketch windowResized={handleResize} setup={fourierSketch.setup} draw={fourierSketch.draw} />
            </div>
        </div>
    )

}

export default Fourier;
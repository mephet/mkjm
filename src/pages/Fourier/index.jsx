import React, { useState } from 'react';
import Sketch from 'react-p5'
import { isMobile } from 'react-device-detect';
import FourierDesciption from './FourierDescription';

import FourierSeries from './sketch';
import { Slider } from 'antd';

function Fourier() {
    const INITIAL_SERIES_NUM = 4;
    const MAX_SERIES_NUM = 20;
    const STEP_SERIES_NUM = 1;

    const widthMultiplier = isMobile ? 0.95 : 0.6;
    const radiusMultiplier = isMobile ? 40 : 50;
    const [seriesNum, setSeriesNum] = useState(INITIAL_SERIES_NUM);
    const [fourierSketch, setFourierSketch] = useState(new FourierSeries(window.innerWidth * widthMultiplier,
        window.innerHeight * widthMultiplier,
        INITIAL_SERIES_NUM,
        radiusMultiplier));


    function handleResize() {
        setFourierSketch(new FourierSeries(window.innerWidth * widthMultiplier,
            window.innerHeight * widthMultiplier,
            seriesNum,
            radiusMultiplier))
    }

    function updateFourier(newNum) {
        setSeriesNum(newNum);
        setFourierSketch(new FourierSeries(window.innerWidth * widthMultiplier,
            window.innerHeight * widthMultiplier,
            newNum,
            radiusMultiplier))
    }

    const sliderMarks = {
        0: '0',
        10: '10',
        20: '20',
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
            <FourierDesciption />
            <div style={styles.sliderStyle}>
                <h2>Number of periodic signal inputs</h2>
                <Slider
                    value={seriesNum}
                    onChange={n => updateFourier(n)}
                    marks={sliderMarks}
                    min={0}
                    max={MAX_SERIES_NUM}
                    step={STEP_SERIES_NUM} />
            </div>
            <br />
            <div style={styles.canvasContainerStyle}>
                <Sketch windowResized={handleResize} setup={fourierSketch.setup} draw={fourierSketch.draw} />
            </div>
        </div>
    )

}

export default Fourier;
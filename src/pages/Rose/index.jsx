import React, { useState } from 'react';
import Sketch from 'react-p5';
import RoseFunction from './sketch';
import { Slider } from 'antd';
import RoseDescription from './RoseDescription';
import { isMobile } from 'react-device-detect';

const Rose = () => {
    const INITIAL_N = 5;
    const INITIAL_D = 5;
    const MAX_N = 10;
    const STEP_N = 0.2;
    const MAX_D = 10;
    const STEP_D = 0.2;

    const widthMultiplier = isMobile ? 0.8 : 0.6;
    

    const [roseSketch, setRoseSketch] = useState(new RoseFunction(INITIAL_N,
                                                                  INITIAL_D,
                                                                  window.innerWidth * widthMultiplier,
                                                                  window.innerHeight * widthMultiplier));
    const [n, setN] = useState(INITIAL_N);
    const [d, setD] = useState(INITIAL_D);

    function handleResize() {
        setRoseSketch(new RoseFunction(n, d, window.innerWidth * widthMultiplier, window.innerHeight * widthMultiplier))
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

    const sliderMarks = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10'
    }

    function updateRose(n, d) {
        setD(d);
        setN(n);
        setRoseSketch(new RoseFunction(n, d, window.innerWidth * widthMultiplier, window.innerHeight * widthMultiplier));
    }

    return (
        <div style={styles.containerStyle}>
            <RoseDescription />
            <div style={styles.sliderStyle}>
                <h2>N value</h2>
                <Slider
                    value={n}
                    onChange={n => updateRose(n, d)}
                    marks={sliderMarks}
                    min={0}
                    max={MAX_N}
                    step={STEP_N} />
            </div>
            <br />
            <div style={styles.sliderStyle}>
                <h2>D Value</h2>
                <Slider
                    value={d}
                    onChange={d => updateRose(n, d)}
                    marks={sliderMarks}
                    min={0}
                    max={MAX_D}
                    step={STEP_D} />
            </div>
            <div style={styles.canvasContainerStyle}>
                <Sketch windowResized={handleResize} style={styles.canvasStyle} setup={roseSketch.setup} draw={roseSketch.draw} />
            </div>
            <br /> <br />
        </div>
    )


}

export default Rose;
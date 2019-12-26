import React, { useState } from 'react';
import Sketch from 'react-p5';
import RoseFunction from './sketch';
import { Slider } from 'antd';

const Rose = () => {
    const INITIAL_N = 5;
    const INITIAL_D = 5;
    const MAX_N = 10;
    const STEP_N = 1;
    const MAX_D = 10;
    const STEP_D = 1;

    const [roseSketch, setRoseSketch] = useState(new RoseFunction(INITIAL_N, INITIAL_D));
    const [n, setN] = useState(INITIAL_N);
    const [d, setD] = useState(INITIAL_D);

    const styles = {
        containerStyle: {
            marginTop: '64px',
            display: 'flex',
            flexDirection: 'column'
        },
        sliderStyle: {
            flex: 1,
            marginLeft: '10%',
            marginRight: '10%'
        },
        canvasStyle: {
            marginLeft: '10%',
            marginRight: '10%'
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
        setRoseSketch(new RoseFunction(n, d));
    }

    return (
        <div style={styles.containerStyle}>
            
            <div style={styles.canvasStyle}>
                <Sketch  setup={roseSketch.setup} draw={roseSketch.draw} />
            </div>
            <div style={styles.sliderStyle}>
                <h4>N value</h4>
                <Slider
                    value={n}
                    onChange={n => updateRose(n, d)}
                    marks={sliderMarks}
                    min={0}
                    max={MAX_N}
                    step={STEP_N} />
            </div>
            <div style={styles.sliderStyle}>
                <h4>D Value</h4>
                <Slider
                    value={d}
                    onChange={d => updateRose(n, d)}
                    marks={sliderMarks}
                    min={0}
                    max={MAX_D}
                    step={STEP_D} />
            </div>

        </div>
    )


}

export default Rose;
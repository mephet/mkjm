import React from 'react';
import Sketch from 'react-p5';
import { setup, draw } from './sketch';

const Encryption = () => {

    const styles = {
        containerStyle: {
            marginTop: '64px'
        }
    }

    // const setup = (p5, parentCanvasRef) => {
    //     p5.createCanvas(window.innerWidth, window.innerHeight - 67).parent(parentCanvasRef);
    // }

    // const draw = p5 => {
    //     p5.background(0);
    //     p5.ellipse(50, 50, 80, 80)
    // }

    return (
        <div style={styles.containerStyle}>
            <Sketch setup={setup} draw={draw} />
        </div>
    )

}

export default Encryption;
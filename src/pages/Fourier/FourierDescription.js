import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const FourierDescription = () => {

    const styles = {
        textStyle: {
            marginTop: '10%',
            fontFamily: 'Roboto',
            fontSize: '1.4em'
        }
    }

    return (
        <div style={styles.textStyle}>
            <h3>Fourier Series</h3>
            <Text>
                The Fourier Series is the expansion of an infinite series of periodic wave components which make up the resulting signal.
                The superposition of a series of sine and cosine waves converges to form a new signal shape as the output.
            </Text>
            <br /><br />
            <h3>Fourier Coefficients</h3>
            The fourier coefficients <i>an</i> and <i>bn</i> denote the value of the series at point <i>n</i> over the continuous period.
            <img src='https://wikimedia.org/api/rest_v1/media/math/render/svg/d87ea971eaacd35522b58bb93e18bb4ae7d6647b' alt='formula fourier coefficents' ></img>
            <br /><br />
            <h3>Try It Out Yourself</h3>
            <Text>
                The following signal aims to approximate a square wave. Use the slider to vary the number of sine and cosine inputs.
                Observe how the number of convergent periodic signals has an effect on the final resulting output.
            </Text>
            <br /><br /><br />
        </div>
    )
}

export default FourierDescription;
import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const RoseDescription = props => {

    const styles = {
        textStyle: {
            marginTop: '10%',
            fontFamily: 'Roboto',
            fontSize: '1.4em'
        }
    }

    return (
        <div style={styles.textStyle}>
            <h3>The Rose Function</h3>
            <Text>
                The Rose is a sinusoid curve resembling the shape of flower petals. The curve was named rhodonea after the Italian mathematician Luigi Guido Grandi
                who was best known for his work <i>Flores geometrici</i> in 1728 where he studied the Rose Curve.
            </Text>
            <br /><br /><br />
            <h3>Ring Around the Rosie</h3>
            <ul>
                <li>If the value of <i>k</i> is odd, the rose will have <i>k</i> number of petals. </li>
                <li>If the value of <i>k</i> is even, the rose will have <i>2k</i> number of petals.</li>
                <li>If <i>k</i> is a half integer (e.g. 1/2, 3/2, 5/2), the curve will have <i>4k</i> petals.</li>
                <li>If <i>k</i> can be expressed as <i>n ± 1/6</i>, where <i>n</i> is a nonzero integer, the curve will be rose-shaped with <i>12k</i> petals.</li>
                <li>If <i>k</i> is rational, then the curve is closed and has finite length. If <i>k</i> is irrational, then it is not closed and has infinite length. </li>
            </ul>
            <br />
            <h3>Try It Out Yourself</h3>
            <Text>
                The value of <i>n</i> and <i>d</i> respectively are directly and inversely related to <i>j=k</i> in the form <Text code={true}>k = n/d</Text>. 
                Adjust the values of <i>d</i> and <i>n</i> to generate the <i>k</i> value for the Rose Curve.
            </Text>
            <br /><br /><br />
        </div>

    )
}

export default RoseDescription;
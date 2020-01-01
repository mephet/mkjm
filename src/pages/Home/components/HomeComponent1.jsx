import React from 'react';
import { Typography } from 'antd';

const HomeComponent1 = props => {

    return (
        <Typography.Text style={styles.textStyle}>
            Change your thoughts and you change your world
            <br />
            &emsp;&emsp; - Norman Vincent Peale
        </Typography.Text>
    )
}

const styles = {
    textStyle: {
        flex: 2,
        color: 'white',
        fontWeight: 'bold',
        fontSize: '5vw',
        fontFamily: 'Indie Flower',
        paddingLeft: '10vw',
        paddingRight: '10vw'
    }
}



export default HomeComponent1;
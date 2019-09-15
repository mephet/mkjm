import React from 'react';

const Bar = props => {

    const { length, bgc} = props;

    let styles = {
        height: length,
        margin: 3,
        width: '100%',
        maxWidth : '20%',
        backgroundColor: bgc
    }

    return (
        <div style={styles}>

        </div>
    )
}



export default Bar;
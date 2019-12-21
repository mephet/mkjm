import React from 'react';

const Bar = props => {

    const { length, bgc } = props;

    let styles = {
        height: length,
        margin: '0.15rem',
        width: '100%',
        backgroundColor: bgc
    }

    return (
        <div style={styles}>

        </div>
    )
}



export default Bar;
import React from 'react';
import { Carousel } from 'antd';

const Home = (props) => {
    return (
        <Carousel style={carouselStyle}>
            <div>
                <h3>Test</h3>
            </div>
            <div>
                <h3>This is</h3>
            </div>
            <div>
                <h3>A Carousel</h3>
            </div>
        </Carousel>
    )
}

const carouselStyle = {
    textAlign: 'center',
    height: '160px',
    lineHeight: '160px',
    background: 'lightgrey',
    overflow: 'hidden'
}

export default Home;
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
// const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
// const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
// const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
// const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
// const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
// const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>



class Home extends React.Component {
    render() {
        return (
            <Parallax pages={3} ref={ref => (this.parallax = ref)}>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url('server')} style={{ width: '20%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url('bash')} style={{ width: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => this.parallax.scrollTo(0)}>
                    <img src={url('clients-main')} style={{ width: '40%' }} />
                </ParallaxLayer>
            </Parallax>
        )
    }

}

const carouselStyle = {
    textAlign: 'center',
    height: '160px',
    lineHeight: '160px',
    background: 'lightgrey',
    overflow: 'hidden'
}

export default Home;
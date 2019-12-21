import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import HomeComponent1 from './HomeComponent1';


const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
// const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
// const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
// const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
// const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
// const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
// const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>



const Home = () => {

    let parallax = null;

    const styles = {
        p1Style: {
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${url('server')})`,
            backgroundPosition: 'center',
            backgroundSize: '50% 50%',
        },
        p1ForeStyle: {
            opacity: 1
        },
        containerStyle: {
            flex: 1
        }
    }

    return (
        <Parallax pages={3} ref={ref => (parallax = ref)} style={styles.containerStyle}>
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

            <ParallaxLayer
                offset={0}
                speed={0.1}
                onClick={() => parallax.scrollTo(1)}
                style={styles.p1Style}>
                <HomeComponent1 />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer
                offset={1}
                speed={0.1}
                onClick={() => parallax.scrollTo(2)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={url('bash')} style={{ width: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer
                offset={2}
                speed={-0}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => parallax.scrollTo(0)}>
                <img src={url('clients-main')} style={{ width: '40%' }} />
            </ParallaxLayer>
        </Parallax >

    )

}

export default Home;
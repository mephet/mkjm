import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import HomeComponent1 from './HomeComponent1';
import HomeComponent2 from './HomeComponent2';


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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        p1ForeStyle: {
            opacity: 1
        },
    }

    return (
        <Parallax pages={3} ref={ref => (parallax = ref)} >
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} alt="background" />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} alt="background" />

            <ParallaxLayer
                offset={0}
                speed={0.1}
                onClick={() => parallax.scrollTo(1)}
                style={styles.p1Style}>
                <img src={process.env.PUBLIC_URL + '/resources/bg1.jpeg'} style={{ width: '100%', height: '100%' }} alt="background 1"></img>
            </ParallaxLayer>

            <ParallaxLayer
                offset={0}
                speed={0.5}
                onClick={() => parallax.scrollTo(1)}
                style={styles.p1Style}>
                <HomeComponent1 />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="parallax cloud" />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="parallax cloud" />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="parallax cloud" />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="parallax cloud" />
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="parallax cloud" />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="parallax cloud" />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer
                offset={1}
                speed={0.1}
                onClick={() => parallax.scrollTo(2)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
                <HomeComponent2 />
            </ParallaxLayer>

            <ParallaxLayer
                offset={2}
                speed={-0}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => parallax.scrollTo(0)}>
                {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
            </ParallaxLayer>
        </Parallax >

    )

}

export default Home;
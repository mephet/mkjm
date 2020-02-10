import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import HomeComponent1 from './components/HomeComponent1';
import HomeComponent2 from './components/HomeComponent2';


// const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
// const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
// const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
// const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
// const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
// const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
// const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>
const cloud = "https://awv3node-homepage.surge.sh/build/assets/cloud.svg";

const Home = () => {
    const styles = {
        p1Style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${process.env.PUBLIC_URL}/resources/bg1.jpeg)`,
            backgroundSize: 'cover'
        },
        p2Style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        p1ForeStyle: {
            opacity: 1
        },
    }

    return (
        <Parallax pages={3} >
            <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: `url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)`, backgroundSize: 'cover', backgroundColor: 'grey'}} />
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} alt="background" />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} alt="background" />

            <ParallaxLayer
                offset={0}
                speed={0.1}
                style={styles.p1Style}>
            </ParallaxLayer>

            <ParallaxLayer
                offset={1.2}
                speed={0.5}
                style={styles.p2Style}>
                <HomeComponent1 />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="parallax cloud" />
                <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer offset={1.85} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="parallax cloud" />
                <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer offset={1.2} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="parallax cloud" />
                <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer offset={1.9} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="parallax cloud" />
                <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="parallax cloud" />
                <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer offset={2.3} speed={0.4} style={{ opacity: 0.3 }}>
                <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '2%' }} alt="parallax cloud" />
                <img src={cloud} style={{ display: 'block', width: '30%', marginLeft: '55%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={-0.2} style={{ opacity: 0.6 }}>
                <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '30%' }} alt="parallax cloud" />
                <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="parallax cloud" />
            </ParallaxLayer>

            <ParallaxLayer
                offset={2}
                speed={0.1}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HomeComponent2 />
            </ParallaxLayer>

            <ParallaxLayer
                offset={2}
                speed={-0}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
            </ParallaxLayer>
        </Parallax >

    )

}

export default Home;
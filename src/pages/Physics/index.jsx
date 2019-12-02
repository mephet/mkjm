import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import mEngine from './EngineUtil';

class Physics extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            rotation: 0,
            engine: null
        }
    }

    componentDidMount() {
        let initData = {
            viewportHeight: this.props.viewportHeight,
            viewportWidth: this.props.viewportWidth,
            sceneRef: this.refs.scene
        }
        const engine = mEngine(initData);
        this.setState({
            engine: engine
        })
    }

    spinIt = () => {
        let newRot = this.state.rotation + 180;
        this.setState({
            rotation: newRot
        })
        let newEngine = this.state.engine;
        newEngine.world.gravity.y = this.state.engine.world.gravity.y * -1;
        this.setState({
            engine: newEngine
        })
        // this.state.engine.world.gravity.y = y * -1
    }

    render() {
        let styles = {
            selectionBarStyle: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            },
            canvasStyle: {
                transform: `rotate(${this.state.rotation}deg)`
            }
        }
        return (
            <div>
                <div style={styles.selectionBarStyle}>
                    <Button
                        type="primary"
                        name="flipHourglass"
                        size="large"
                        onClick={this.spinIt}
                    >Flip It!</Button>
                </div>

                <div style={styles.canvasStyle} id="world" ref="scene"></div>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        viewportWidth: state.windowDetails.viewportWidth,
        viewportHeight: state.windowDetails.viewportHeight
    }
}

export default connect(mapStateToProps, null)(Physics);
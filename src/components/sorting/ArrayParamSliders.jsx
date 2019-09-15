import React from 'react';
import { Slider, Row, Col, InputNumber } from 'antd';

const ArrayParamSliders = props => {
    const { arraySize, generateNewArray, stepDelay, setStepDelay, isDisabled } = props;

    return (
        <div>
            <Row>
                <Col>
                    <p>Array Size:</p>
                </Col>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={100}
                        disabled={isDisabled}
                        onChange={generateNewArray}
                        value={arraySize}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={100}
                        disabled={isDisabled}
                        style={{ marginLeft: 16 }}
                        value={arraySize}
                        onChange={generateNewArray}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Step Delay:</p>
                </Col>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={500}
                        disabled={isDisabled}
                        onChange={setStepDelay}
                        value={stepDelay}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={500}
                        disabled={isDisabled}
                        style={{ marginLeft: 16 }}
                        value={stepDelay}
                        onChange={setStepDelay}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ArrayParamSliders;
import React, { useState } from 'react';
import { Button } from 'antd'
import { connect } from 'react-redux';

import { clearStepQueue, clearVisualArray, setVisualArray } from '../actions/sortingAction';
import { reshuffleArray } from '../services/sortingService';
import { mergeSortBottomUp } from '../services/mergeSort';
import { quickSort } from '../services/quickSort';
import { heapSort } from '../services/heapSort';
import SortingVisual from '../components/sorting/SortingVisual';
import ArrayParamSliders from '../components/sorting/ArrayParamSliders';



const Sorting = props => {

    const { visualArray, setVisualArray, clearVisualArray,
        stepQueue, clearStepQueue } = props;

    const initialState = {
        sortingMethod: 'mergesort',
        arraySize: 50,
        stepDelay: 30,
        sortingArray: [],
        currentVisual: {},
        isVisualButtonDisabled: true,
        isUiDisabled: false
    }

    const [sortingMethod, setSortingMethod] = useState(initialState.sortingMethod);
    const [arraySize, setArraySize] = useState(initialState.arraySize);
    const [sortingArray, setSortingArray] = useState(initialState.sortingArray);
    const [currentVisual, setCurrentVisual] = useState(initialState.currentVisual);
    const [stepDelay, setStepDelay] = useState(initialState.stepDelay);
    const [isVisualButtonDisabled, setIsVisualButtonDisabled] = useState(initialState.isVisualButtonDisabled);
    const [isUiDisabled, setIsUiDisabled] = useState(initialState.isUiDisabled)

    const resetScenario = () => {
        setCurrentVisual({});
        clearStepQueue();
        setSortingArray([]);
        clearVisualArray();
        setIsVisualButtonDisabled(true);
    }

    const generateNewArray = (size) => {
        resetScenario();
        setArraySize(size);
        const newArray = reshuffleArray(size, 1, 300)
        setSortingArray(newArray);
        const startingVisual = { visualArray: newArray, }
        setVisualArray(newArray);
        setCurrentVisual(startingVisual);
    }

    const startSort = () => {

        switch (sortingMethod) {
            case 'mergesort':
                mergeSortBottomUp([...sortingArray]);
                break;
            case 'quicksort':
                quickSort([...sortingArray], 0, sortingArray.length)
                break;
            case 'heapsort':
                heapSort([...sortingArray])
                break;
            default:


        }

        setIsVisualButtonDisabled(false);
    }

    const beginVisualisation = async (stepDelay) => {
        setIsUiDisabled(true);

        const sleep = (stepDelay) => {
            return new Promise(resolve => setTimeout(resolve, stepDelay));
        }

        for (let index = 0; index < stepQueue.length; index++) {
            setCurrentVisual(stepQueue[index])
            await sleep(stepDelay)
        }

        setIsUiDisabled(false);
    }

    return (
        <div style={containerStyle}>
            <div style={selectionBarStyle}>
                <Button
                    name="mergesort"
                    type={sortingMethod === 'mergesort' ? 'primary' : 'ghost'}
                    size="large"
                    disabled={isUiDisabled}
                    onClick={(e) => setSortingMethod(e.target.name)}
                >
                    MergeSort
                </Button>
                <Button
                    name="quicksort"
                    type={sortingMethod === 'quicksort' ? 'primary' : 'ghost'}
                    size="large"
                    disabled={isUiDisabled}
                    onClick={(e) => setSortingMethod(e.target.name)}
                >
                    QuickSort
                </Button>
                <Button
                    name="heapsort"
                    type={sortingMethod === 'heapsort' ? 'primary' : 'ghost'}
                    size="large"
                    disabled={isUiDisabled}
                    onClick={(e) => setSortingMethod(e.target.name)}
                >
                    HeapSort
                </Button>
            </div>
            <br />
            <ArrayParamSliders isDisabled={isUiDisabled} arraySize={arraySize} generateNewArray={generateNewArray} stepDelay={stepDelay} setStepDelay={setStepDelay} />
            <br />
            <div>
                <Button
                    type="primary"
                    ghost
                    disabled={isUiDisabled}
                    onClick={() => generateNewArray(arraySize)}
                >
                    Reshuffle
                </Button>
                <Button
                    name="sort"
                    type="primary"
                    ghost
                    disabled={isUiDisabled}
                    onClick={() => startSort()}
                >
                    Sort
                </Button>
                <Button
                    type="primary"
                    ghost
                    disabled={isVisualButtonDisabled || isUiDisabled}
                    onClick={() => {
                        beginVisualisation(stepDelay);
                    }}
                >
                    Visualize
                </Button>
            </div>
            <br />
            <br />
            <SortingVisual array={visualArray} />
            <br />
            {(currentVisual.visualArray) ? <SortingVisual stepType={currentVisual.stepType} stepElements={currentVisual.stepElements} array={currentVisual.visualArray} /> : null}
        </div >
    )
}

const containerStyle = {
    padding: 50
}

const selectionBarStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}

const mapStateToProps = state => {
    return {
        visualArray: state.sortingDetails.visualArray,
        stepQueue: state.sortingDetails.stepQueue,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisualArray: newArray => dispatch(setVisualArray(newArray)),
        clearStepQueue: () => dispatch(clearStepQueue()),
        clearVisualArray: () => dispatch(clearVisualArray()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
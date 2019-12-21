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
import { BrowserView, MobileView, isMobile } from 'react-device-detect';



const Sorting = props => {

    const { visualArray, setVisualArray, clearVisualArray,
        stepQueue, clearStepQueue } = props;

    const initialState = {
        sortingMethod: 'mergesort',
        arraySize: 50,
        stepDelay: 30,
        sortingArray: [],
        currentVisual: {},
        isSortButtonDisabled: true,
        isVisualButtonDisabled: true,
        isUiDisabled: false
    }

    const maxStepDelay = isMobile ? 300 : 300
    const maxArraySize = isMobile ? 50 : 100

    const [sortingMethod, setSortingMethod] = useState(initialState.sortingMethod);
    const [arraySize, setArraySize] = useState(initialState.arraySize);
    const [sortingArray, setSortingArray] = useState(initialState.sortingArray);
    const [currentVisual, setCurrentVisual] = useState(initialState.currentVisual);
    const [stepDelay, setStepDelay] = useState(initialState.stepDelay);
    const [isSortButtonDisabled, setSortButtonDisabled] = useState(initialState.isSortButtonDisabled);
    const [isVisualButtonDisabled, setVisualButtonDisabled] = useState(initialState.isVisualButtonDisabled);
    const [isUiDisabled, setIsUiDisabled] = useState(initialState.isUiDisabled)

    const resetScenario = () => {
        setCurrentVisual({});
        clearStepQueue();
        setSortingArray([]);
        clearVisualArray();
        setSortButtonDisabled(true)
        setVisualButtonDisabled(true);
    }

    const generateNewArray = (size) => {
        resetScenario();
        setArraySize(size);
        const newArray = reshuffleArray(size, 1, 300)
        setSortingArray(newArray);
        const startingVisual = { visualArray: newArray, }
        setVisualArray(newArray);
        setCurrentVisual(startingVisual);
        setSortButtonDisabled(false);
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
        setVisualButtonDisabled(false);
    }

    const selectSortingMethod = (method) => {
        resetScenario();
        setSortingMethod(method);
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
                    onClick={(e) => selectSortingMethod(e.target.name)}
                >
                    MergeSort
                </Button>
                <Button
                    name="quicksort"
                    type={sortingMethod === 'quicksort' ? 'primary' : 'ghost'}
                    size="large"
                    disabled={isUiDisabled}
                    onClick={(e) => selectSortingMethod(e.target.name)}
                >
                    QuickSort
                </Button>
                <Button
                    name="heapsort"
                    type={sortingMethod === 'heapsort' ? 'primary' : 'ghost'}
                    size="large"
                    disabled={isUiDisabled}
                    onClick={(e) => selectSortingMethod(e.target.name)}
                >
                    HeapSort
                </Button>
            </div>
            <br />
            <ArrayParamSliders
                isDisabled={isUiDisabled}
                arraySize={arraySize}
                generateNewArray={generateNewArray}
                stepDelay={stepDelay}
                setStepDelay={setStepDelay}
                maxArraySize={maxArraySize}
                maxStepDelay={maxStepDelay} />
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
                    disabled={isSortButtonDisabled || isUiDisabled}
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
            <BrowserView>
                <SortingVisual array={visualArray} />
                <br />
                {(currentVisual.visualArray) ?
                    <SortingVisual stepType={currentVisual.stepType} stepElements={currentVisual.stepElements} array={currentVisual.visualArray} />
                    : null}
            </BrowserView>
            <MobileView>
                <SortingVisual array={visualArray} />
                <br />
                {(currentVisual.visualArray) ?
                    <SortingVisual stepType={currentVisual.stepType} stepElements={currentVisual.stepElements} array={currentVisual.visualArray} />
                    : null}
            </MobileView>
        </div >
    )
}

const containerStyle = {
    padding: '1rem'
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
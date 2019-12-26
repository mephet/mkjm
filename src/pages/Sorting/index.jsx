import React, { useState } from 'react';
import { Button } from 'antd'
import { connect } from 'react-redux';

import { clearStepQueue, clearVisualArray, setVisualArray } from '../../actions/sortingAction';
import { reshuffleArray } from '../../services/sortingService';
import { mergeSortBottomUp } from '../../services/mergeSort';
import { quickSort } from '../../services/quickSort';
import { heapSort } from '../../services/heapSort';
import SortingVisual from '../../components/sorting/SortingVisual';
import ArrayParamSliders from '../../components/sorting/ArrayParamSliders';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

const Sorting = props => {

    const MIN_HEIGHT = 1;
    const MAX_HEIGHT = 300;
    const MAX_ARRAY_SIZE_MOBILE = 50;
    const MAX_ARRAY_SIZE = 100;
    const MAX_STEP_DELAY = 300;
    const INITIAL_ARRAY_SIZE = 30;
    const INITIAL_STEP_DELAY = 30;
    const MERGESORT_SELECTION = 'MergeSort';
    const QUICKSORT_SELECTION = 'QuickSort';
    const HEAPSORT_SELECTION = 'HeapSort';

    const { visualArray, setVisualArray, clearVisualArray,
        stepQueue, clearStepQueue } = props;

    const initialState = {
        sortingMethod: MERGESORT_SELECTION,
        arraySize: INITIAL_ARRAY_SIZE,
        stepDelay: INITIAL_STEP_DELAY,
        sortingArray: [],
        currentVisual: {},
        isSortButtonDisabled: true,
        isVisualButtonDisabled: true,
        isUiDisabled: false
    }

    const maxStepDelay = isMobile ? MAX_STEP_DELAY : MAX_STEP_DELAY;
    const maxArraySize = isMobile ? MAX_ARRAY_SIZE_MOBILE : MAX_ARRAY_SIZE;

    const [sortingMethod, setSortingMethod] = useState(initialState.sortingMethod);
    const [arraySize, setArraySize] = useState(initialState.arraySize);
    const [sortingArray, setSortingArray] = useState(initialState.sortingArray);
    const [currentVisual, setCurrentVisual] = useState(initialState.currentVisual);
    const [stepDelay, setStepDelay] = useState(initialState.stepDelay);
    const [isSortButtonDisabled, setSortButtonDisabled] = useState(initialState.isSortButtonDisabled);
    const [isVisualButtonDisabled, setVisualButtonDisabled] = useState(initialState.isVisualButtonDisabled);
    const [isUiDisabled, setIsUiDisabled] = useState(initialState.isUiDisabled);

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
        const newArray = reshuffleArray(size, MIN_HEIGHT, MAX_HEIGHT)
        setSortingArray(newArray);
        const startingVisual = { visualArray: newArray, }
        setVisualArray(newArray);
        setCurrentVisual(startingVisual);
        setSortButtonDisabled(false);
    }

    const startSort = () => {

        switch (sortingMethod) {
            case MERGESORT_SELECTION:
                mergeSortBottomUp([...sortingArray]);
                break;
            case QUICKSORT_SELECTION:
                quickSort([...sortingArray], 0, sortingArray.length)
                break;
            case HEAPSORT_SELECTION:
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
        <div style={styles.containerStyle}>
            <div style={styles.selectionBarStyle}>
                <Button
                    name={MERGESORT_SELECTION}
                    type={sortingMethod === MERGESORT_SELECTION ? 'primary' : 'ghost'}
                    size="large"
                    disabled={isUiDisabled}
                    onClick={(e) => selectSortingMethod(e.target.name)}
                >
                    {MERGESORT_SELECTION}
                </Button>
                <Button
                    name={QUICKSORT_SELECTION}
                    type={sortingMethod === QUICKSORT_SELECTION ? 'primary' : 'ghost'}
                    size="large"
                    disabled={isUiDisabled}
                    onClick={(e) => selectSortingMethod(e.target.name)}
                >
                    {QUICKSORT_SELECTION}
                </Button>
                <Button
                    name={HEAPSORT_SELECTION}
                    type={sortingMethod === HEAPSORT_SELECTION ? 'primary' : 'ghost'}
                    size="large"
                    disabled={isUiDisabled}
                    onClick={(e) => selectSortingMethod(e.target.name)}
                >
                    {HEAPSORT_SELECTION}
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

const styles = {
    containerStyle: {
        padding: '1rem',
        marginTop: '64px'
    },
    selectionBarStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
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
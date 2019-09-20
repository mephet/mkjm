import store from '../store';
import { updateStepQueue } from '../actions/sortingAction';

export const stepForward = (array, sourceIndex, destIndex, type) => {
    const { visualArray } = store.getState().sortingDetails;
    const sourceValue = array[sourceIndex];
    // const destValue = array[destIndex];

    if (type === 'movement') visualArray[destIndex] = sourceValue;

    let postArray = [...visualArray];

    let payloadToDispatch = {
        visualArray: postArray,
        stepType: type,
        stepElements: [sourceIndex, destIndex]
    }

    store.dispatch(updateStepQueue(payloadToDispatch));
}

export const reshuffleArray = (length, min, max) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        const gen = Math.floor(Math.random() * (max - min) + min)
        arr.push(gen)
    }
    return arr;
}


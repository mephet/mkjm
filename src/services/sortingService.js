import store from '../store';
import { updateStepQueue } from '../actions/sortingAction';

export const stepForward = (a, b, destIndex, type) => {
    const { visualArray } = store.getState().sortingDetails;

    if (destIndex !== null)
        visualArray[destIndex] = a;

    let postArray = [...visualArray];

    let payloadToDispatch = {
        visualArray: postArray,
        stepType: type,
        stepElements: [a, b]
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


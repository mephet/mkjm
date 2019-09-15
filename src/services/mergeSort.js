import { stepForward } from './sortingService';

const mergeBottomUp = (array, left, step) => {
    let right = left + step;
    let end = Math.min(left + step * 2 - 1, array.length - 1);
    let leftMoving = left;
    let rightMoving = right;
    let buffer = [];

    for (let i = left; i <= end; i++) {
        if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
            leftMoving < right) {
            stepForward(array[leftMoving], array[rightMoving], null, 'comparison')
            buffer[i] = array[leftMoving];
            stepForward(array[leftMoving], array[i], i, 'movement')
            leftMoving++;
        } else {
            stepForward(array[leftMoving], array[rightMoving], null, 'comparison')
            buffer[i] = array[rightMoving];
            stepForward(array[rightMoving], array[i], i, 'movement')
            rightMoving++;
        }

    }

    for (let j = left; j <= end; j++) {
        array[j] = buffer[j];
    }
}


export const mergeSortBottomUp = async (array) => {
    let step = 1;
    while (step < array.length) {
        let left = 0;
        while (left + step < array.length) {
            mergeBottomUp(array, left, step);
            left += step * 2
        }
        step *= 2;
    }
    return array;
}

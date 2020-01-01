import { stepForward } from "./sortingService";

let arrLength;

const maxHeap = (array, i) => {
    const left = 2 * i + 1
    const right = 2 * i + 2
    let max = i

    if (left < arrLength && array[left] > array[max]) {
        stepForward(array, max, left, 'comparison')
        max = left
    }

    if (right < arrLength && array[right] > array[max]) {
        stepForward(array, max, right, 'comparison')
        max = right
    }

    if (max !== i) {
        swap(array, i, max)
        maxHeap(array, max)
    }
}

export const heapSort = (array) => {
    arrLength = array.length

    for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
        maxHeap(array, i)
    }

    for (let i = array.length - 1; i > 0; i--) {
        swap(array, 0, i)
        arrLength--

        maxHeap(array, 0)
    }
    return
}


const swap = (array, i, j) => {
    stepForward(array, i, j, 'movement');
    stepForward(array, j, i, 'movement');
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
import { stepForward } from "./sortingService";

export const quickSort = (array, left, right) => {
    
    if (left < right) {
        const pivot = right;
        const partitionIndex = partition(array, pivot, left, right)

        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right)
    }
}

const partition = (array, pivot, left, right) => {
    const pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            stepForward(array, i, pivot, 'comparison');
            swap(array, i, partitionIndex);
            
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

const swap = (array, i, j) => {
    stepForward(array, i, j, 'movement');
    stepForward(array, j, i, 'movement');
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


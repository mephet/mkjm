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
            stepForward(array[i], pivotValue, null, 'comparison');
            stepForward(array[i], array[partitionIndex], partitionIndex, 'movement');
            stepForward(array[partitionIndex], array[i], i, 'movement');
            swap(array, i, partitionIndex);
            
            partitionIndex++;
        }
    }
    stepForward(array[partitionIndex], array[right], right, 'movement');
    stepForward(array[right], array[partitionIndex], partitionIndex, 'movement');
    swap(array, right, partitionIndex);
    return partitionIndex;
}

const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


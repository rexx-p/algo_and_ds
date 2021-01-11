import { clone } from '../util/index.js'

// This method replaces the original array reference to a sorted one.
const mergeSortExternal = (originalArr) => {
    const arr = clone(originalArr);
    return mergeSort(arr, 0, arr.length - 1)
}
const mergeSort = (arr, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        let singleElementArray = [arr[leftIndex]];
        return singleElementArray;
    }
    //divide and conquer
    let middle = parseInt((rightIndex + leftIndex) / 2)

    //divide the array into two sub arrays
    let arrX = mergeSort(arr, leftIndex, middle);
    let arrY = mergeSort(arr, middle + 1, rightIndex);

    //merge the two sorted arrays
    return mergeTwoSortedArray(arrX, arrY);
}

const mergeTwoSortedArray = (arrX, arrY) => {
    let arrZ = []; //Final sorted Array
    let arrXIndex = 0, arrYIndex = 0;
    while (arrXIndex < arrX.length && arrYIndex < arrY.length) {
        if (arrX[arrXIndex] < arrY[arrYIndex]) {
            arrZ.push(arrX[arrXIndex++]);
        } else {
            arrZ.push(arrY[arrYIndex++]);
        }
    }
    if (arrXIndex < arrX.length) {
        return arrZ.concat(arrX.slice(arrXIndex));
    }

    if (arrYIndex < arrY.length) {
        return arrZ.concat(arrY.slice(arrYIndex));
    }

    return arrZ;
}

export default mergeSortExternal;
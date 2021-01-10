import { clone } from '../util/index.js'

// This method replaces the original array reference to a sorted one.
const insertionSort = originalArr => {
    const arr = clone(originalArr);
    for (let index = 1; index < arr.length; index++) {
        insertAtRightPlace(arr, index);
    }
    return arr;
}

const insertAtRightPlace = (arr, currentIndex) => {
    let elementAtCurrentIndex = arr[currentIndex];
    for (let i = currentIndex - 1; i > -1; i--) {
        if (elementAtCurrentIndex < arr[i]) {
            arr[i + 1] = arr[i];
        } else {
            arr[i + 1] = elementAtCurrentIndex;
            break;
        }
    }
}

export default insertionSort;
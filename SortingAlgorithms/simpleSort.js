import { clone } from '../util/index.js'
// This method replaces the original array reference to a sorted one.
const simpleSort = (arr) => {
    const copiedArr = clone(arr);
    let sortedArray = [];
    while (copiedArr.length > 0) {
        sortedArray.push(spliceSmallest(copiedArr)[0]);
    }
    return sortedArray;
}

const spliceSmallest = arr => {
    let smallest = arr[0];
    let indexOfSmallestElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i];
            indexOfSmallestElement = i;
        }
    }
    //Remove the smallest element from Array and return;
    //Deleting an element from an array also has O(n) complexity
    return arr.splice(indexOfSmallestElement, 1);  //TODO: Replace splice with your own implementation.
}

export default simpleSort;
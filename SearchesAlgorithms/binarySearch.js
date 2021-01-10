const binarySearch = (sortedArr, elementToFind, offset = 0) => {
    let middle = parseInt(sortedArr.length / 2);
    let middleElement = sortedArr[middle];

    if (middle == 0 && middleElement != elementToFind) {
        return -1;
    }

    if (middleElement == elementToFind) {
        return middle + offset;
    } else if (middleElement > elementToFind) {
        const remainingArrToConsider = sortedArr.slice(0, middle);
        return binarySearch(remainingArrToConsider, elementToFind, offset + 0);
    } else {
        const remainingArrToConsider = sortedArr.slice(middle + 1, sortedArr.length);
        return binarySearch(remainingArrToConsider, elementToFind, middle + offset + 1);
    }

}

export default binarySearch;
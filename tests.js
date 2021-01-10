import simpleSearch from './SearchesAlgorithms/simpleSearch.js';
import binarySearch from './SearchesAlgorithms/binarySearch.js';
import simpleSort from './SortingAlgorithms/simpleSort.js'
import insertionSort from './SortingAlgorithms/insertionSort.js'

const arr = [1, 46, 77, 35, 7, 5, 22, 8, 3, 5, 6];

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Searching for element 3 using SimpleSearch. Element found at Position -', simpleSearch(arr, 3));   // Complexity = O(n)

console.log('Searching for element 8 using SimpleSearch. Element found at Position -', binarySearch(sortedArr, 8));   // Complexity = O(log(n))

console.log('Sorting the array using simple sort', simpleSort(arr));   // Complexity = O(n*n)

console.log('Sorting the array using insertion sort', insertionSort(arr) );   // Complexity = O(n*n)

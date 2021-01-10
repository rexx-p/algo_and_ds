// Brute Force search
const simpleSearch = (arr, elementToFind) =>{
    for(let i =0;i <arr.length; i++){
        if(arr[i] == elementToFind){
            return i;
        }
    }
}

export default simpleSearch;
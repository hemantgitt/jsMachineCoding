//BinarySearch in a sorted array 

function binarySearch(arr , target){
    let left = 0 ;
    let right = arr.length -1 ;

    while(left <= right){
        const mid = Math.floor((left + right)/2);

        if(arr[mid] === target){
            return mid
        } else if (arr[mid] < target){
            left = mid + 1 ; // search at right 
        }else if(arr[mid]> target){
            right = mid-1 ; //search at left
        }
    }

    return-1 // target not found
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(sortedArray, target);
console.log(result); 
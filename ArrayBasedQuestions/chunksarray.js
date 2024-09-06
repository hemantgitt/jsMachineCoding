const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const size = 3;


function chunkedArray(arr , size){
    let result = [];

    for(let i = 0 ; i<arr.length ; i = i+ size){
        const chunks = arr.slice(i , i+size)
        result.push(chunks);
    }
    return result;

}
 
const expected = chunkedArray(arr , size)
// const size = 3

console.log(expected)

const arr = [3, 5, -2, 9, 7];


function maxProduct(arr){
    let maxProduct = -Infinity;

    for(let i = 0 ; i< arr.length ; i++){
        for(let j = i+1 ; j< arr.length ; j++){
        const product = arr[i] * arr[j];
        if(product > maxProduct){
            maxProduct = product;
        }
        }
    }
    return maxProduct;
}

console.log(maxProduct(arr));
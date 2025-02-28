Array.prototype.myflat = function(callback){
    const arr = this ;
    const result = [];

    function flat(arr){
      for(let i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            flat(arr[i])
        }
        else{
            result.push(arr[i])
        }
      } 
    }
    flat(arr,0)
    return result;
}



const input = [1, 2, [[3, 4]], 5, [6], 7, [{a:1,b:5}] , 8, 9, [1]];

const flatresult = input.myflat(Infinity);
console.log(flatresult)

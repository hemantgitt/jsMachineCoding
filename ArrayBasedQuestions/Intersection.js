const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

Array.prototype.myfilter = function(callback){
   const arr = this; 
   const newArray = []
   for(let i = 0 ; i <arr.length ; i++){
      const result = callback(arr[i] , i )
      if(result){
         newArray.push(arr[i])
      }
   }
   return newArray;
}

function intersection(arr1 , arr2){
   return arr1.myfilter(element => arr2.includes(element))
}

const result = intersection(arr1 , arr2)
console.log(result)
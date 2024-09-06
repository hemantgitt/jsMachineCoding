Array.prototype.mymap = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Not a correct function");
  }

  const arr = this;
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newArray.push(result);
  }

  return newArray;
};

const myArray = [1, 2, 3, 4, 5];

const mappedResult = myArray.mymap((item) => {
  return item * 2;
});

console.log(mappedResult); // [2, 4, 6, 8, 10]

const maperresult = myArray.map((item)=>{
   return item*3
})

console.log(maperresult)

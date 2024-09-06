// Sum of an array element   by reduce

const sumarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5];

Array.prototype.myreduce = function (callback, intialValue) {
  if (typeof callback !== "function") {
    throw new Error("Invalid Function");
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(intialValue, arr[i], i, arr);
    intialValue = result;
  }
  return intialValue;
};

const finalsum = sumarray.myreduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(finalsum);
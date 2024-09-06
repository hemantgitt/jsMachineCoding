Array.prototype.myfilter = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Invalid Function");
  }

  const newArray = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);

    if (result) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

const arraylist = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const resultstore = arraylist.myfilter((item) => {
  return item % 2 === 0;
});

console.log(resultstore);

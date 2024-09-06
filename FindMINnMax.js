
///find min n max

Array.prototype.findMax = function () {
    if (this.length === 0) {
      throw new Error("Array is empty");
    }
    return this.reduce(
      (max, current) => (current > max ? current : max),
      -Infinity
    );
  };
  
  Array.prototype.findMin = function () {
    if (this.length === 0) {
      throw new Error("Array is empty");
    }
    return this.reduce(
      (min, current) => (current < min ? current : min),
      Infinity
    );
  };
  
  // Example usage
  const myArra = [1, 2, 3, 4, 5];
  console.log(myArra.findMax()); // 5
  console.log(myArra.findMin()); // 1
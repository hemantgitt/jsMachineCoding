function groupByProperty(array, property) {
    return array.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    });
  }
  
  // Example usage:
  const arr = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Jim', age: 21 },
    { name: 'Jake', age: 21 },
    { name: 'Jill', age: 20 }
  ];
  
  const groupedByAge = groupByProperty(arr, 'age');
  console.log(groupedByAge);
  
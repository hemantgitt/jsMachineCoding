//normal copy

// const obj = {
//   name: "hemant",
// };

// console.log(obj.name);

// const obj2 = obj;
// obj2.name = "sam";

// console.log(obj2);

//shallow copy

const object1 = {
  name: "sam",
  address: {
    city: "delhi",
  },
  greet : function(){}
};

// Using Object.assign to create a shallow copy
const object2 = Object.assign({}, object1);
// OR using spread operator (also creates shallow copy)
// const object2 = {...object1};
object2.address.city = "mumbai";
// console.log(object2.address.city); // Output: "delhi"
// console.log(object1); // The problem with shallow copy is that when there is nesting in the object means that the object is in the object in that case when we chnage the value in the 2nd object it also changes the 1st object points towards the same memory location as object one. to handle this issue we use deep copy method where we first stringyfy the object 1 and the parse them then it creates two different addresses.

//Deep copy

const object3 = JSON.parse(JSON.stringify(object1))
// const object3 = _.cloneDeep(object1);

// Assigning 'bangalore' to object3.address.city and storing the value in 'result'
let result = object3.address.city = "bangalore";

console.log(result);  // This will print "bangalore"
console.log(object1);  // This will print the original object1, which remains unchanged




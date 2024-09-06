//Call  , apply n bind method

const obj = {
    name: "hemant",
    age: 27,
  };
  
  const profile = function (state, country, designation) {
    console.log(this.name + " " + state + " " + country + " " + designation);
  };
  
  //By the apply
  profile.apply(obj, ["delhi", "india", "software engineer"]);
  
  const obj2 = {
    name: "hemu",
    age: 24,
  };
  //by call
  profile.call(obj2, "delhi", "india", "software engineer");
  //by bind
  const result1 = profile.bind(obj2, "delhi", "india", "software engineer");
  
  result1();
  
  //polyfill of call method in js
  
  Function.prototype.mycall = function(context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error("not a valid function");
    }
  
    // Temporarily assign the function to the context
    context.refFunc = this;
  
    // Call the function
    const result = context.refFunc(...args);
  
    // Clean up the context
    delete context.refFunc;
  
    // Return the result
    return result;
  };
  
  const userObjectt = {
    name: "hemant"
  };
  
  var profiles = function() {
    console.log(this.name);
  };
  
  profiles.mycall(userObjectt); // Output: "hemant"
  
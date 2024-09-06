
//how to reverse a string

function reverseString(str) {
    let rev = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str[i];
    }
    return rev;
  }
  
  console.log(reverseString("Hemant"));




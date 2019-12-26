

// // Homework 4

//// exercise 2 

// 2. Write a function, which receives two numbers as arguments
// and finds all numbers between them such that each digit of 
// the number is even. The numbers obtained should be printed 
// in a comma-separated sequence on a single line



function evenDigitsNumbers(num1, num2) {
    var string = ""
  
    for (var i = num1; i<= num2; i++) {
      if(areDigitsEven(i)) {
         string += i
         
         if(i !== num2) {
            string += ","
         }
      }
    }
    return string
  }
  
  
  function areDigitsEven(num) {
    while(num > 0) {
      var digit = num % 10;
      num = Math.floor(num / 10)
      if(digit % 2 !== 0) {
        return false
      }
    }
    return true 
  }
  
  
  var numbers = evenDigitsNumbers(19,42)
  if (numbers === "") {
    console.log("Such numbers does not exist.”")
  } else {
    console.log(numbers)
  }




// // Homework 4

//  // // exercise 3
//”3.Write a recursive function to 
//determine whether all digits of the number are odd or not



function printDigit(num){

 if (num<=0) {
 return true;
 }
 var digit = num %10;

if (digit % 2 === 0){
return false
}
return printDigit(Math.floor(num/10))

}
console.log(printDigit(4211133));



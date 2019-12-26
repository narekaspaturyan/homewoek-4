

// // Homework 4

// // exercise 1
//1.Write a function which receives an array and a number as 
//arguments and returns a new array from the elements of the given array which are 
//larger than the given number. 


var myNum=16;
var myArr = [10,25,16,-5,30,15,24];
 
function action(a, b) {
  return myArr.filter(item => (b < item))
}
var filtered = action(myArr, myNum)
if (filtered.length===0){
  console.log("Such value does not exist")
}

console.log(filtered);


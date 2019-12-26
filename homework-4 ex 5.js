

// // Homework 4

// // exercise 5
//Given an array of numbers which is almost sorted in ascending order. 
//Find the index where sorting order is violated



function findDisorderIndex(array, currentIndex) {

  if (currentIndex + 1 === array.length) {
    return -1
  }

  if (array[currentIndex] > array[currentIndex + 1]) {
    return currentIndex + 1
  }
  return findDisorderIndex(array, currentIndex + 1)
}


var array = [-9, -4, -4, 3, 12, 4, 5]
console.log(findDisorderIndex(array, 0))













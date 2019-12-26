

// // Homework 4

// // exercise 4
//4. Given an array of numbers. Write a recursive function to 
//find its minimal positive element.
// (if such element does not exist, return -1)


function minimalPositiveElement(array, currentMinimum, index) {

    if(index === array.length) {
      return currentMinimum
    }

    var nextMinimum = currentMinimum
    var nextNumber = array[index]

    if (nextNumber >= 0 && currentMinimum === -1) {
      nextMinimum = nextNumber
    } 
    if (nextNumber < currentMinimum && nextNumber >= 0) {
      nextMinimum = nextNumber
    }
    return minimalPositiveElement(array, nextMinimum, index + 1)
}


var array = [56, -9, 87, -23, 0, -105, 55, 1]
console.log(minimalPositiveElement(array, -1, 0))









var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  array = ["welcome"];
  var newAray = [element, ...array];
}
addElementToBeginningOfArray([], "hello");
function destructivelyAddElementToBeginningOfArray(array, element){
}

function addelementToEndOfArray(array, element){
  
}

function destructivelyAddElementToEndOfArray(array, element){
  
}

function accessElementInArray(array, index){
  array = ["welcome", "hello", "goodbye"];
  return array[index];
}
console.log(accessElementInArray([], 3))
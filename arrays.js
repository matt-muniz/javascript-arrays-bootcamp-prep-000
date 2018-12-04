var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  array = [element];
  
  for (i = 0; i <= array.length; i++){
    array.push(element);
    console.log(array)
  }
  
}

function destructivelyAddElementToBeginningOfArray(element){
}

addElementToBeginningOfArray([0], "hello");
addElementToBeginningOfArray([1], "goodbye")



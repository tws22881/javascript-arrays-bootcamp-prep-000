var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars,foo){
  var newArray = [foo, ...chocolateBars];
  return newArray;  
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,foo){
  chocolateBars.unshift(foo);
  return chocolateBars;
}

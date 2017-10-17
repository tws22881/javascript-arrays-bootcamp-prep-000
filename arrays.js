var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars,foo){
  chocolateBars.unshift(foo);
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,foo){
  var chocolateBars = [foo, ...chocolateBars];
}

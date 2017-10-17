var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars,foo){
  chocolateBars.unshift(foo);
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,foo){
  var chocolateBars = [foo, ...chocolateBars];
  return chocolateBars;
}

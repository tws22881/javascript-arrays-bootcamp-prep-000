var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars,foo){
  var newArray = [foo, ...chocolateBars];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,foo){
  chocolateBars.unshift(foo);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,foo){
  var newArray = [...chocolateBars, foo];
  return newArray;
}

function destructivelyAddElementToEndOfArray(chocolateBars,foo){
  chocolateBars.push(foo);
  return chocolateBars;
}

function accessElementInArray(array, index){
  array = [1,2,3];
  index = 1;
  return chocolateBars[index];
}

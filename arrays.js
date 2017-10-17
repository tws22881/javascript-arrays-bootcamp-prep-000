var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(){
  chocolateBars.unshift("foo");
}

function destructivelyAddElementToBeginningOfArray(){
  var chocolateBars = ["foo", ...chocolateBars];
}
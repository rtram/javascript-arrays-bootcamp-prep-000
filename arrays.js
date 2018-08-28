var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];

function addElementToBeginningOfArray (array, element) {
	array = [element, ...array];
	return array;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
	array.unshift(element);
	return array;
}

function addElementToEndOfArray (array, element) {
	array = [...array, element];
	return array;
}

function destructivelyAddElementToEndOfArray (array,element) {
	array.push(element);
	return array;
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray (chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray (chocolateBars) {
  var chocolateBars2 = chocolateBars.slice(0, chocolateBars.length - 1);
  return chocolateBars2
}
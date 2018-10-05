// Code your solution in this file!
function distanceFromHqInBlocks (someNumber) {
  let result
  someNumber >= 42 ? result = someNumber - 42 : result = 42 - someNumber
  return result
}

function distanceFromHqInFeet (someNumber) {
  let result = distanceFromHqInBlocks(someNumber) * 264
  return result
}

function distanceTravelledInFeet (valueOne, valueTwo) {
  let result
  if (valueOne >= valueTwo) {
    result = (valueOne - valueTwo) * 264
  } else {
    result = (valueTwo - valueOne) * 264
  }
  return result
}

function calculatesFarePrice (start, destination) {
  let result
  let feet = distanceTravelledInFeet(start, destination)
  if (feet <= 400) {
    result = 0.0
  } else if (feet <= 2000) {
    result = (feet - 400) * 0.02
  } else if (feet > 2000 && feet <= 2500) {
    result = 25
  } else {
    result = `cannot travel that far`
  }
  return result
}

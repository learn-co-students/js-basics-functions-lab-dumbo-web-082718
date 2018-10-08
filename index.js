// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
  if (someValue > 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue)*264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock > endBlock){
    return (startBlock - endBlock)*264;
  } else {
    return (endBlock - startBlock)*264;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet (start, destination);
  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance - 400)*0.02;
  } else {
    return 0;
  }


}

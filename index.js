// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let result
     if (distance >= 42){
      result = distance - 42;
      return result;
    } else if (distance < 42){
      result = 42 - distance;
      return result
  }
}

function distanceFromHqInFeet(distance){
  let result
  result = distanceFromHqInBlocks(distance)* 264;
    return result;
}

function distanceTravelledInFeet(num1, num2) {
  let result
  result = (num1 - num2) * 264;
  result = Math.abs(result)
  return result;
}

function calculatesFarePrice(start, destination) {
  let fare;
  let distance = distanceTravelledInFeet(start, destination);
   if (distance <= 400) {
    fare = 0;
  } else if (distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500){
    fare = 25;
  } else {
    fare = 'cannot travel that far';
  }
   return fare;
}

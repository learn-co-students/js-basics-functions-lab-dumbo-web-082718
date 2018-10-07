// Code your solution in this file!
function distanceFromHqInBlocks(location){
  let distance
  if (location>42){
    distance = location-42
  }else{
    distance = 42 - location
  }
  return distance
}

function distanceFromHqInFeet(someValue){
  const feet = distanceFromHqInBlocks(someValue)*264;
  return feet
}

function distanceTravelledInFeet(start,end){
  let distanceInFeet
  if (end>start){
    distanceInFeet = (end - start)*264
  }else{
    distanceInFeet= (start - end)*264
  }
  return distanceInFeet
}

function calculatesFarePrice(start, destination){
  let price
  const feetTravelled = distanceTravelledInFeet(start,destination)
  if (feetTravelled<=400){
    price = 0
  }else if (feetTravelled<=2000){
    price = (feetTravelled - 400) * .02
  }else if (feetTravelled>2500){
    return 'cannot travel that far'
  }else{
    price = 25
  }
  return price
}

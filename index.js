function distanceFromHqInBlocks(block){
  return Math.abs(42-block);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block)*264; 
}

function distanceTravelledInFeet(block1,block2){
  const blockDistance = Math.abs(block2-block1);
  return blockDistance*264;
}

function calculatesFarePrice(start,finish){
  const distance = distanceTravelledInFeet(start, finish);
  let result = "";
  if(distance > 2500){
    result = "cannot travel that far";
  }else if(distance <= 400){
    result = 0;
  }else if(distance<=2000){
    result = 0.02*(distance-400);
  }else if(distance>2000){
    result = 25;
  }
  return result;
}
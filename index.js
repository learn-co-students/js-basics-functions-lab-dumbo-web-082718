// Code your solution in this file!
    function distanceFromHqInBlocks(someValue) {
      if (someValue >= 42){
        return  someValue - 42;
      }else{
        return 42 - someValue;
      }
      }

    function distanceFromHqInFeet(someValue) {
      return distanceFromHqInBlocks(someValue) * 264;

      // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
      //the return value of distanceFromHqInBlocks can then be used to calculate feet
    }
      function distanceTravelledInFeet(someValue, distance) {

          const  x = (someValue - distance) * 264
          return Math.abs(x);
        }
        function calculatesFarePrice(someValue, distance) {

           const price = distanceTravelledInFeet(someValue, distance);

            if (price <= 400) {
              return 0;
            } else if (price > 400 && price <= 2000) {
              return .02 * (price - 400);
            } else if (price > 2000 && price < 2500) {
              return 25;
            } else {
              return 'cannot travel that far';
            }
        }

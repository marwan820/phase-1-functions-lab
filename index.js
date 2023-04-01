function distanceFromHqInBlocks(pickUpLocation){

    const hq = 42;
   let distanceInBlocks =  pickUpLocation>hq ? pickUpLocation - hq : hq - pickUpLocation;
return distanceInBlocks 

}


console.log(distanceFromHqInBlocks(34))

function distanceFromHqInFeet(feet){
    const manhattenFeetPerBlock = 264 
    return distanceFromHqInBlocks(feet) * manhattenFeetPerBlock
     
  }
  console.log(distanceFromHqInFeet(43))

  

   function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264
    let distanceTravelled = Math.abs(start - destination) * feetPerBlock
    return distanceTravelled
     
   }
   console.log(distanceTravelledInFeet(43,48))

   function calculatesFarePrice(start, destination) {
    let feetPerBlock = 264;
    let distanceTravelled = Math.abs(start - destination) * feetPerBlock;
    
    if (distanceTravelled <= 400) {
      return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      return (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
      return 25;
    } else if (distanceTravelled > 2500) {
      return "cannot travel that far";
    }
  }
    console.log(calculatesFarePrice(43,42))
function produceDrivingRange(range) {
  return function(beginningBlock, endingBlock) {
    let beginningInteger = parseInt(beginningBlock.slice(0,2), 10);
    let endingInteger = parseInt(endingBlock.slice(0,2), 10);
    let distanceTravelled = Math.abs(endingInteger - beginningInteger);
    if (distanceTravelled <= range) {
      return `within range by ${range - distanceTravelled}`
    } else {
      return `${distanceTravelled - range} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  }
}

function createDriver() {
  let driverId = 0;
  return class{
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}

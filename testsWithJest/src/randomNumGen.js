var rn = require("random-number");

class RandomNumGen {
  
  validate(arr) {
    this.checkNegative(arr);
    this.checkSame(arr);
    this.checkLength(arr);
  }

  checkNegative(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
      throw "negative entries aren't allowed"
    }
  }
  
  checkSame(arr) {
    if (arr[0] === arr[1]) {
      throw "equals entries aren't allowed";
    }
  }

  checkLength(arr) {
    if(arr.length > 2) {
      throw "invalid array";
    }
  }

  generate(arr) {
    this.validate(arr);
    
    let random = rn.generator({
      min: 0,
      max: 1000,
      integer: true
    })

    this.randomNum = random(arr);
    
    return this.randomNum;
  }
}

module.exports = RandomNumGen;
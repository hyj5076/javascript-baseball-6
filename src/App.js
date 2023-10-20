import { MissionUtils } from "@woowacourse/mission-utils";

class RandomNumberMaker {
  constructor(randomNumber = '') {
    this.randomNumber = randomNumber;
  }

  makeRandomNumber() {
    while (this.randomNumber.length < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(1, 9).toString();
      if (!this.randomNumber.includes(newNumber)) {
        this.randomNumber += newNumber;
      }
    }
    return this.randomNumber;
  }
}

// Using the class
const maker = new RandomNumberMaker();
const uniqueNumber = maker.makeRandomNumber();
console.log(uniqueNumber);

/* 
class App {
  async play() {}
}

export default App; */
export default RandomNumberMaker;

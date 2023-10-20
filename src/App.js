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

/* const maker = new RandomNumberMaker();
const uniqueNumber = maker.makeRandomNumber();
console.log(uniqueNumber); */

class App {
  constructor() {
    this.randomNumberMaker = new RandomNumberMaker();
  }

  async play() {
    try {
      const uniqueNumber = this.randomNumberMaker.makeRandomNumber();
      console.log(uniqueNumber);
    } catch (error) {
      console.error("에러 메시지:", error);
      throw error;
    }
  }
}

export default App;
// export default RandomNumberMaker;

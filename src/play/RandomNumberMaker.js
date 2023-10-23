import { MissionUtils } from "@woowacourse/mission-utils";

class RandomNumberMaker {
  constructor() {
    this.randomNumber = '';
  }

  getRandomNumber() {
    return this.randomNumber;
  }

  makeRandomNumber() {
    while (this.randomNumber.length < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(1, 9).toString();
      if (!this.randomNumber.includes(newNumber)) {
        this.randomNumber += newNumber;
      }
    }
  }
}

export default RandomNumberMaker;
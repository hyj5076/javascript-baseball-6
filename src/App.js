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

class App {
  async play() {}
}

export default App;

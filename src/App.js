// 사용자 입력값 받기
class UserNumberReader {
  constructor(userNumber = '') {
    this.userNumber = userNumber;
  }

  async userInputNumber() {
    try {
      this.userNumber = await Console.readLineAsync();
      return this.userNumber;
    } catch (error) {
      console.error("오류 발생:", error);
      throw error;
    }
  }
}

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
  constructor() {
    this.maker = new RandomNumberMaker();
    this.reader = new UserNumberReader();
  }

  async play() {
    try {
      const uniqueNumber = this.maker.makeRandomNumber();
      Console.print(uniqueNumber);
      
      const userAnswer = await this.reader.userInputNumber();
      Console.print(userAnswer);
    } catch(error) {
      /* console.error("에러 메시지:", error);
      throw error; */
    }
  }
}

export default App;

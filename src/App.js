import RandomNumberMaker from '../src/Utils/RandomNumberMaker.js';

const correctNumber = (userNumber) => {
  if (userNumber.length !== 3) {
    return false;
  }
  const uniqueChars = [...new Set([...userNumber])]; // 중복 숫자 제거
  return userNumber.length === uniqueChars.length;
};

class UserNumberReader {
  constructor() {
    this.userNumber = '';
  }

  getUserNumber() {
    return this.userNumber;
  }

  setUserNumber(value) {
    this.userNumber = value;
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

      const userNumber = await Console.readLineAsync();
      if (!correctNumber(userNumber)) {
        throw new Error("유효하지 않은 입력값입니다.");
      }

      this.reader.setUserNumber(userNumber);
      const userAnswer = this.reader.getUserNumber();
      Console.print(userAnswer);
    } catch (error) {
    }
  }
}

export default App;
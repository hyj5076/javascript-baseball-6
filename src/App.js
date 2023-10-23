import { MissionUtils } from "@woowacourse/mission-utils";
import * as Constants from './const/Messages';
import RandomNumberMaker from './play/RandomNumberMaker';
import UserNumberReader from './play/UserNumberReader';
import { correctNumber } from './Utils/CorrectNumber';
import { showResult } from './play/GameResult';
import ReplayManager from "./play/ReplayManager";
const Console = MissionUtils.Console;

class App {
  constructor() {
    this.maker = new RandomNumberMaker();
    this.reader = new UserNumberReader();
    this.replayManager = new ReplayManager();
    this.maker.makeRandomNumber();
  }

  async play() {
    try {
      Console.print(Constants.GAME_START); // 게임 시작
      const uniqueNumber = this.maker.getRandomNumber();
      // Console.print(`첫번째 게임 랜덤수: ${uniqueNumber}`);
      
      while (true) {
        const userNumber = await Console.readLineAsync(); // 사용자 수 읽기
        if (!correctNumber(userNumber)) {
          throw new Error("[ERROR]"); // 예외 발생
        }

        this.reader.setUserNumber(userNumber);
        const userAnswer = this.reader.getUserNumber();
        Console.print(`${Constants.NOTICE_INPUT} : ${userAnswer}`);
        
        showResult(uniqueNumber, userAnswer); // 결과 문구

        if (this.isGameOver(uniqueNumber, userAnswer)) { 
          const shouldContinue = await this.replayManager.handleReplay(this);
          if (!shouldContinue) {
            break; // 게임을 종료하려면 루프를 종료
          }
        }
      }
    } catch (error) {
      Console.print(Constants.GAME_OVER);
      //Console.print(error.message);
      return Promise.reject(error);
    }
  }

  isGameOver(computerNumber, playerNumber) {
    return computerNumber === playerNumber; // 게임 종료
  }
}

export default App;
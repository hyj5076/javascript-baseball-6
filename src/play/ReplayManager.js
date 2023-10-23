import { Console } from "@woowacourse/mission-utils";
import * as Constants from '../const/Messages';

class ReplayManager {
  async handleReplay(app) {
    Console.print(Constants.SUGGEST_REPLAY);
    const userChoice = await Console.readLineAsync();
    if (userChoice === '1') {
/*       app.maker.makeRandomNumber(); // 랜덤 숫자 다시 생성
      const newRandomNumber = app.maker.getRandomNumber(); // 새로운 랜덤 숫자 가져오기
      Console.print(`두번째 게임 랜덤수: ${newRandomNumber}`); // 새로운 랜덤 숫자 출력 (디버깅용) */
      //await app.play();
      return true; // 새로운 게임 시작
    } else if (userChoice === '2') {
      return false; // 게임 종료
    } else {
      Console.print("올바르지 않음");
      return false;
    }
  }
}

export default ReplayManager;
  
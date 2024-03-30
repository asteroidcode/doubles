export function change1PlayerTable12(round, firstNameNum, secondNameNum) {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // player 13 sits out first round
  if (round !== 1) {
    if (firstNameNum === round.toString()) {
      firstNameNumX = "13";
    }

    if (secondNameNum === round.toString()) {
      secondNameNumX = "13";
    }
  }
  // console.log("firstsecond", firstNameNumX, secondNameNumX);

  return ([firstNameNumX, secondNameNumX]);
}
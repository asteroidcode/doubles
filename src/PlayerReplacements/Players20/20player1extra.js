export const change1PlayerTable20 = (round, firstNameNum, secondNameNum) => {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // player 21 sits out first round
  if (round !== 1) {
    if (firstNameNum === round.toString()) {
      firstNameNumX = "21";
    }

    if (secondNameNum === round.toString()) {
      secondNameNumX = "21";
    }
  }
  // console.log("firstsecond", firstNameNumX, secondNameNumX);

  return ([firstNameNumX, secondNameNumX]);
}
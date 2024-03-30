export const change1PlayerTable16 = (round, firstNameNum, secondNameNum) => {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // player 17 sits out first round
  if (round !== 1) {
    if (firstNameNum === round.toString()) {
      firstNameNumX = "17";
    }

    if (secondNameNum === round.toString()) {
      secondNameNumX = "17";
    }
  }
  // console.log("firstsecond", firstNameNumX, secondNameNumX);

  return ([firstNameNumX, secondNameNumX]);
}
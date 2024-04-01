export const change1PlayerTable24 = (round, firstNameNum, secondNameNum) => {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // player 25 sits out first round
  if (round !== 1) {
    if (firstNameNum === round.toString()) {
      firstNameNumX = "25";
    }

    if (secondNameNum === round.toString()) {
      secondNameNumX = "25";
    }
  }
  // console.log("firstsecond", firstNameNumX, secondNameNumX);

  return ([firstNameNumX, secondNameNumX]);
}
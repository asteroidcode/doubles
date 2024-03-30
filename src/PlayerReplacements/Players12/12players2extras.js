export function change2PlayerTable12 (round, firstNameNum, secondNameNum) {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // first round, 13 and 14 are sitting out
  if (round === 2 || round === 8) {

    if (firstNameNum === "1") {
      firstNameNumX = "13";
    }
    else if (firstNameNum === "2") {
      firstNameNumX = "14";
    }

    if (secondNameNum === "1") {
      secondNameNumX = "13";
    }
    else if (secondNameNum === "2") {
      secondNameNumX = "14";
    }
  }

  if (round === 3 || round === 9) {

    if (firstNameNum === "3") {
      firstNameNumX = "13";
    }
    else if (firstNameNum === "4") {
      firstNameNumX = "14";
    }

    if (secondNameNum === "3") {
      secondNameNumX = "13";
    }
    else if (secondNameNum === "4") {
      secondNameNumX = "14";
    }
  }

  if (round === 4 || round === 10) {

    if (firstNameNum === "5") {
      firstNameNumX = "13";
    }
    else if (firstNameNum === "6") {
      firstNameNumX = "14";
    }

    if (secondNameNum === "5") {
      secondNameNumX = "13";
    }
    else if (secondNameNum === "6") {
      secondNameNumX = "14";
    }
  }

  if (round === 5 || round === 11) {

    if (firstNameNum === "7") {
      firstNameNumX = "13";
    }
    else if (firstNameNum === "8") {
      firstNameNumX = "14";
    }

    if (secondNameNum === "7") {
      secondNameNumX = "13";
    }
    else if (secondNameNum === "8") {
      secondNameNumX = "14";
    }
  }

  if (round === 6) {

    if (firstNameNum === "9") {
      firstNameNumX = "13";
    }
    else if (firstNameNum === "10") {
      firstNameNumX = "14";
    }

    if (secondNameNum === "9") {
      secondNameNumX = "13";
    }
    else if (secondNameNum === "10") {
      secondNameNumX = "14";
    }
  }

  if (round === 7) {

    if (firstNameNum === "11") {
      firstNameNumX = "13";
    }
    else if (firstNameNum === "12") {
      firstNameNumX = "14";
    }

    if (secondNameNum === "11") {
      secondNameNumX = "13";
    }
    else if (secondNameNum === "12") {
      secondNameNumX = "14";
    }
  }
  
  // console.log("firstsecond", firstNameNumX, secondNameNumX);

  return ([firstNameNumX, secondNameNumX]);
}
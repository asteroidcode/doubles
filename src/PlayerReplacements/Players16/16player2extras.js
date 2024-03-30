export const change2PlayerTable16 = (round, firstNameNum, secondNameNum) => {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // first round, 17 and 18 are sitting out
  if (round === 2 || round === 10) {

    if (firstNameNum === "1") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "2") {
      firstNameNumX = "18";
    }

    if (secondNameNum === "1") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "2") {
      secondNameNumX = "18";
    }
  }

  if (round === 3 || round === 11) {

    if (firstNameNum === "3") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "4") {
      firstNameNumX = "18";
    }

    if (secondNameNum === "3") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "4") {
      secondNameNumX = "18";
    }
  }

  if (round === 4 || round === 12) {

    if (firstNameNum === "5") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "6") {
      firstNameNumX = "18";
    }

    if (secondNameNum === "5") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "6") {
      secondNameNumX = "18";
    }
  }

  if (round === 5 || round === 13) {

    if (firstNameNum === "7") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "8") {
      firstNameNumX = "18";
    }

    if (secondNameNum === "7") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "8") {
      secondNameNumX = "18";
    }
  }

  if (round === 6 || round === 14) {

    if (firstNameNum === "9") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "10") {
      firstNameNumX = "18";
    }

    if (secondNameNum === "9") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "10") {
      secondNameNumX = "18";
    }
  }

  if (round === 7 || round === 15) {

    if (firstNameNum === "11") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "12") {
      firstNameNumX = "18";
    }

    if (secondNameNum === "11") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "12") {
      secondNameNumX = "18";
    }
  }

  if (round === 8) {

    if (firstNameNum === "13") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "14") {
      firstNameNumX = "18";
    }

    if (secondNameNum === "13") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "14") {
      secondNameNumX = "18";
    }
  }

  if (round === 9) {

    if (firstNameNum === "15") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "16") {
      firstNameNumX = "18";
    }

    if (secondNameNum === "15") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "16") {
      secondNameNumX = "18";
    }
  }
  
  // console.log("firstsecond", firstNameNumX, secondNameNumX);

  return ([firstNameNumX, secondNameNumX]);
}
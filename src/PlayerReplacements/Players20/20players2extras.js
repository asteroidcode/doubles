export const change2PlayerTable20 = (round, firstNameNum, secondNameNum) => {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // first round, 21 and 22 are sitting out
  if (round === 2 || round === 12) {

    if (firstNameNum === "1") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "2") {
      firstNameNumX = "22";
    }

    if (secondNameNum === "1") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "2") {
      secondNameNumX = "22";
    }
  }

  if (round === 3 || round === 13) {

    if (firstNameNum === "3") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "4") {
      firstNameNumX = "22";
    }

    if (secondNameNum === "3") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "4") {
      secondNameNumX = "22";
    }
  }

  if (round === 4 || round === 14) {

    if (firstNameNum === "5") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "6") {
      firstNameNumX = "22";
    }

    if (secondNameNum === "5") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "6") {
      secondNameNumX = "22";
    }
  }

  if (round === 5 || round === 15) {

    if (firstNameNum === "7") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "8") {
      firstNameNumX = "22";
    }

    if (secondNameNum === "7") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "8") {
      secondNameNumX = "22";
    }
  }

  if (round === 6 || round === 16) {

    if (firstNameNum === "9") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "10") {
      firstNameNumX = "22";
    }

    if (secondNameNum === "9") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "10") {
      secondNameNumX = "22";
    }
  }

  if (round === 7 || round === 17) {

    if (firstNameNum === "11") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "12") {
      firstNameNumX = "22";
    }

    if (secondNameNum === "11") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "12") {
      secondNameNumX = "22";
    }
  }

  if (round === 8 || round === 18) {

    if (firstNameNum === "13") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "14") {
      firstNameNumX = "22";
    }

    if (secondNameNum === "13") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "14") {
      secondNameNumX = "22";
    }
  }

  if (round === 9 || round === 19) {

    if (firstNameNum === "15") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "16") {
      firstNameNumX = "22";
    }

    if (secondNameNum === "15") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "16") {
      secondNameNumX = "22";
    }
  }

  if (round === 10) {

    if (firstNameNum === "17") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "18") {
      firstNameNumX = "22";
    }

    if (secondNameNum === "17") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "18") {
      secondNameNumX = "22";
    }
  }

  if (round === 11) {

    if (firstNameNum === "19") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "20") {
      firstNameNumX = "22";
    }

    if (secondNameNum === "19") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "20") {
      secondNameNumX = "22";
    }
  }


  
  // console.log("firstsecond", firstNameNumX, secondNameNumX);

  return ([firstNameNumX, secondNameNumX]);
}
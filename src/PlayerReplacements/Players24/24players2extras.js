export const change2PlayerTable24 = (round, firstNameNum, secondNameNum) => {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // first round, 25 and 26 are sitting out
  if (round === 2 || round === 14) {

    if (firstNameNum === "1") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "2") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "1") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "2") {
      secondNameNumX = "26";
    }
  }

  if (round === 3 || round === 15) {

    if (firstNameNum === "3") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "4") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "3") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "4") {
      secondNameNumX = "26";
    }
  }

  if (round === 4 || round === 16) {

    if (firstNameNum === "5") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "6") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "5") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "6") {
      secondNameNumX = "26";
    }
  }

  if (round === 5 || round === 17) {

    if (firstNameNum === "7") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "8") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "7") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "8") {
      secondNameNumX = "26";
    }
  }

  if (round === 6 || round === 18) {

    if (firstNameNum === "9") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "10") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "9") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "10") {
      secondNameNumX = "26";
    }
  }

  if (round === 7 || round === 19) {

    if (firstNameNum === "11") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "12") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "11") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "12") {
      secondNameNumX = "26";
    }
  }

  if (round === 8 || round === 20) {

    if (firstNameNum === "13") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "14") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "13") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "14") {
      secondNameNumX = "26";
    }
  }

  if (round === 9 || round === 21) {

    if (firstNameNum === "15") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "16") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "15") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "16") {
      secondNameNumX = "26";
    }
  }

  if (round === 10 || round === 22) {

    if (firstNameNum === "17") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "18") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "17") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "18") {
      secondNameNumX = "26";
    }
  }

  if (round === 11 || round === 23) {

    if (firstNameNum === "19") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "20") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "19") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "20") {
      secondNameNumX = "26";
    }
  }

  if (round === 12) {

    if (firstNameNum === "21") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "22") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "21") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "22") {
      secondNameNumX = "26";
    }
  }

  if (round === 13) {

    if (firstNameNum === "23") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "24") {
      firstNameNumX = "26";
    }

    if (secondNameNum === "23") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "24") {
      secondNameNumX = "26";
    }
  }
  
  // console.log("firstsecond", firstNameNumX, secondNameNumX);

  return ([firstNameNumX, secondNameNumX]);
}
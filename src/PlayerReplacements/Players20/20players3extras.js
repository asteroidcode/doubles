export const change3PlayerTable20 = (round, firstNameNum, secondNameNum) => {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // 20 21 22 sit out rounds 1 9 16
  if (round === 2) {

    if (firstNameNum === "1") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "2") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "3") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "1") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "2") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "3") {
      secondNameNumX = "23"
    }
  }

  if (round === 3) {

    if (firstNameNum === "4") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "5") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "6") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "4") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "5") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "6") {
      secondNameNumX = "23"
    }
  }

  if (round === 4) {

    if (firstNameNum === "7") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "8") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "9") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "7") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "8") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "9") {
      secondNameNumX = "23"
    }
  }

  if (round === 5) {
    
    if (firstNameNum === "10") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "11") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "12") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "10") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "11") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "12") {
      secondNameNumX = "23"
    }
  }

  if (round === 6) {
    
    if (firstNameNum === "13") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "14") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "15") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "13") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "14") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "15") {
      secondNameNumX = "23"
    }
  }

  if (round === 7) {
    
    if (firstNameNum === "16") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "17") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "18") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "16") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "17") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "18") {
      secondNameNumX = "23"
    }
  }

  if (round === 8) {
    
    if (firstNameNum === "19") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "20") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "1") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "19") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "20") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "1") {
      secondNameNumX = "23"
    }
  }

  // 20 21 22 sit out round 9

  if (round === 10) {
    
    if (firstNameNum === "2") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "3") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "4") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "2") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "3") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "4") {
      secondNameNumX = "23"
    }
  }

  if (round === 11) {
    
    if (firstNameNum === "5") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "6") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "7") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "5") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "6") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "7") {
      secondNameNumX = "23"
    }
  }

  if (round === 12) {
    
    if (firstNameNum === "8") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "9") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "10") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "8") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "9") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "10") {
      secondNameNumX = "23"
    }
  }

  if (round === 13) {
    
    if (firstNameNum === "11") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "12") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "13") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "11") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "12") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "13") {
      secondNameNumX = "23"
    }
  }

  if (round === 14) {
    
    if (firstNameNum === "14") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "15") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "16") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "14") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "15") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "16") {
      secondNameNumX = "23"
    }
  }

  if (round === 15) {
    
    if (firstNameNum === "17") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "18") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "19") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "17") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "18") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "19") {
      secondNameNumX = "23"
    }
  }

  // 21 22 23 sit out round 16

  if (round === 17) {
    
    if (firstNameNum === "20") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "1") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "2") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "20") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "1") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "2") {
      secondNameNumX = "23"
    }
  }

  if (round === 18) {
    
    if (firstNameNum === "3") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "4") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "5") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "3") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "4") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "5") {
      secondNameNumX = "23"
    }
  }

  if (round === 19) {
    
    if (firstNameNum === "6") {
      firstNameNumX = "21";
    }
    else if (firstNameNum === "7") {
      firstNameNumX = "22";
    }
    else if (firstNameNum === "8") {
      firstNameNumX = "23"
    }

    if (secondNameNum === "6") {
      secondNameNumX = "21";
    }
    else if (secondNameNum === "7") {
      secondNameNumX = "22";
    }
    else if (secondNameNum === "8") {
      secondNameNumX = "23"
    }
  }

   // console.log("firstsecond", firstNameNumX, secondNameNumX);

   return ([firstNameNumX, secondNameNumX]);
}
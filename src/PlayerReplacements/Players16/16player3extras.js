export const change3PlayerTable16 = (round, firstNameNum, secondNameNum) => {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // 17 18 19 sit out rounds 1 and 8 and 14
  if (round === 2) {

    if (firstNameNum === "1") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "2") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "3") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "1") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "2") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "3") {
      secondNameNumX = "19"
    }
  }

  if (round === 3) {

    if (firstNameNum === "4") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "5") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "6") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "4") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "5") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "6") {
      secondNameNumX = "19"
    }
  }

  if (round === 4) {

    if (firstNameNum === "7") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "8") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "9") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "7") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "8") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "9") {
      secondNameNumX = "19"
    }
  }

  if (round === 5) {
    
    if (firstNameNum === "10") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "11") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "12") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "10") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "11") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "12") {
      secondNameNumX = "19"
    }
  }

  if (round === 6) {
    
    if (firstNameNum === "13") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "14") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "15") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "13") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "14") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "15") {
      secondNameNumX = "19"
    }
  }

  if (round === 7) {
    
    if (firstNameNum === "16") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "1") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "2") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "16") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "1") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "2") {
      secondNameNumX = "19"
    }
  }

  // 17 18 19 sit out round 8
  if (round === 9) {
    
    if (firstNameNum === "3") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "4") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "5") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "3") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "4") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "5") {
      secondNameNumX = "19"
    }
  }

  if (round === 10) {
    
    if (firstNameNum === "6") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "7") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "8") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "6") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "7") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "8") {
      secondNameNumX = "19"
    }
  }

  if (round === 11) {
    
    if (firstNameNum === "9") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "10") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "11") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "9") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "10") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "11") {
      secondNameNumX = "19"
    }
  }

  if (round === 12) {
    
    if (firstNameNum === "12") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "13") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "14") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "12") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "13") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "14") {
      secondNameNumX = "19"
    }
  }

  if (round === 13) {
    
    if (firstNameNum === "15") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "16") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "1") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "15") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "16") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "1") {
      secondNameNumX = "19"
    }
  }

  // 17 18 19 sit round 14 out
  if (round === 15) {
    
    if (firstNameNum === "2") {
      firstNameNumX = "17";
    }
    else if (firstNameNum === "3") {
      firstNameNumX = "18";
    }
    else if (firstNameNum === "4") {
      firstNameNumX = "19"
    }

    if (secondNameNum === "2") {
      secondNameNumX = "17";
    }
    else if (secondNameNum === "3") {
      secondNameNumX = "18";
    }
    else if (secondNameNum === "4") {
      secondNameNumX = "19"
    }
  }

   // console.log("firstsecond", firstNameNumX, secondNameNumX);

   return ([firstNameNumX, secondNameNumX]);
}
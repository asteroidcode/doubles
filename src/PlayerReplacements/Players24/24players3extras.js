export const change3PlayerTable24 = (round, firstNameNum, secondNameNum) => {
    
  let firstNameNumX = firstNameNum;
  let secondNameNumX = secondNameNum;

  // console.log("HERE", round, firstNameNumX, secondNameNumX)

  // 25 26 27 sit out rounds 1 and 10 and 19
  if (round === 2 || round === 11 || round === 20) {

    if (firstNameNum === "1") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "2") {
      firstNameNumX = "26";
    }
    else if (firstNameNum === "3") {
      firstNameNumX = "27"
    }

    if (secondNameNum === "1") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "2") {
      secondNameNumX = "26";
    }
    else if (secondNameNum === "3") {
      secondNameNumX = "27"
    }
  }

  if (round === 3 || round === 12 || round === 21) {

    if (firstNameNum === "4") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "5") {
      firstNameNumX = "26";
    }
    else if (firstNameNum === "6") {
      firstNameNumX = "27"
    }

    if (secondNameNum === "4") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "5") {
      secondNameNumX = "26";
    }
    else if (secondNameNum === "6") {
      secondNameNumX = "27"
    }
  }

  if (round === 4 || round === 13 || round === 22) {

    if (firstNameNum === "7") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "8") {
      firstNameNumX = "26";
    }
    else if (firstNameNum === "9") {
      firstNameNumX = "27"
    }

    if (secondNameNum === "7") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "8") {
      secondNameNumX = "26";
    }
    else if (secondNameNum === "9") {
      secondNameNumX = "27"
    }
  }

  if (round === 5 || round === 14 || round === 23) {
    
    if (firstNameNum === "10") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "11") {
      firstNameNumX = "26";
    }
    else if (firstNameNum === "12") {
      firstNameNumX = "27"
    }

    if (secondNameNum === "10") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "11") {
      secondNameNumX = "26";
    }
    else if (secondNameNum === "12") {
      secondNameNumX = "27"
    }
  }

  if (round === 6 || round === 15) {
    
    if (firstNameNum === "13") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "14") {
      firstNameNumX = "26";
    }
    else if (firstNameNum === "15") {
      firstNameNumX = "27"
    }

    if (secondNameNum === "13") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "14") {
      secondNameNumX = "26";
    }
    else if (secondNameNum === "15") {
      secondNameNumX = "27"
    }
  }

  if (round === 7 || round === 16) {
    
    if (firstNameNum === "16") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "17") {
      firstNameNumX = "26";
    }
    else if (firstNameNum === "18") {
      firstNameNumX = "27"
    }

    if (secondNameNum === "16") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "17") {
      secondNameNumX = "26";
    }
    else if (secondNameNum === "18") {
      secondNameNumX = "27"
    }
  }

  if (round === 8 || round === 17) {
    
    if (firstNameNum === "19") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "20") {
      firstNameNumX = "26";
    }
    else if (firstNameNum === "21") {
      firstNameNumX = "27"
    }

    if (secondNameNum === "19") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "20") {
      secondNameNumX = "26";
    }
    else if (secondNameNum === "21") {
      secondNameNumX = "27"
    }
  }

  if (round === 9 || round === 18) {
    
    if (firstNameNum === "22") {
      firstNameNumX = "25";
    }
    else if (firstNameNum === "23") {
      firstNameNumX = "26";
    }
    else if (firstNameNum === "24") {
      firstNameNumX = "27"
    }

    if (secondNameNum === "22") {
      secondNameNumX = "25";
    }
    else if (secondNameNum === "23") {
      secondNameNumX = "26";
    }
    else if (secondNameNum === "24") {
      secondNameNumX = "27"
    }
  }

   // console.log("firstsecond", firstNameNumX, secondNameNumX);

   return ([firstNameNumX, secondNameNumX]);
}
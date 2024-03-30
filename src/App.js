// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import * as tables from './Tables/tables.js';
import { RoundInput } from './Inputs/RoundInput';
import { NamesInput } from './Inputs/NamesInput';
import { PlayerNumberInput } from './Inputs/PlayerNumberInput.js';
import {blue} from "@mui/material/colors";
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
// import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  const prefersDarkMode = true; // useMediaQuery('(prefers-color-scheme: dark)');

  const [names, setNames] = useState([]);

  const [playerCount, setPlayerCount] = useState(12);
  const [extraPlayerCount, setExtraPlayerCount] = useState(0);

  const [amountOfRounds, setAmountOfRounds] = useState(1);
  
  const [tableUsed, setTableUsed] = useState(tables.tarr12);

  useEffect(() => {
    if (0 < playerCount && playerCount < 16) {
      setTableUsed(tables.tarr12);
    }

    if (15 < playerCount && playerCount < 20) {
      setTableUsed(tables.tarr16);
    }

    if (playerCount === 12 || playerCount === 16) {
      setExtraPlayerCount(0);
    }

    if (playerCount === 13 || playerCount === 17) {
      setExtraPlayerCount(1);
    }

    if (playerCount === 14 || playerCount === 18) {
      setExtraPlayerCount(2);
    }

    if (playerCount === 15 || playerCount === 19) {
      setExtraPlayerCount(3);
    }

  }, [playerCount]);

  useEffect(() => {
    console.log("extraPlayerCount", extraPlayerCount)
  }, [extraPlayerCount]);

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: blue[500]
      }
    }
  })

  const change1PlayerTable12 = (round, firstNameNum, secondNameNum) => {
    
    let firstNameNumX = firstNameNum;
    let secondNameNumX = secondNameNum;

    // console.log("HERE", round, firstNameNumX, secondNameNumX)

    // player 13 sits out first round
    if (round !== 1) {
      if (firstNameNum === round.toString()) {
        firstNameNumX = "13";
      }

      if (secondNameNum === round.toString()) {
        secondNameNumX = "13";
      }
    }
    // console.log("firstsecond", firstNameNumX, secondNameNumX);

    return ([firstNameNumX, secondNameNumX]);
  }

  const change2PlayerTable12 = (round, firstNameNum, secondNameNum) => {
    
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

  const change3PlayerTable12 = (round, firstNameNum, secondNameNum) => {
    
    let firstNameNumX = firstNameNum;
    let secondNameNumX = secondNameNum;

    // console.log("HERE", round, firstNameNumX, secondNameNumX)

    // 13 14 15 sit out rounds 1 and 6
    if (round === 2 || round === 7 || round === 11) {

      if (firstNameNum === "1") {
        firstNameNumX = "13";
      }
      else if (firstNameNum === "2") {
        firstNameNumX = "14";
      }
      else if (firstNameNum === "3") {
        firstNameNumX = "15"
      }

      if (secondNameNum === "1") {
        secondNameNumX = "13";
      }
      else if (secondNameNum === "2") {
        secondNameNumX = "14";
      }
      else if (secondNameNum === "3") {
        secondNameNumX = "15"
      }
    }

    if (round === 3 || round === 8) {

      if (firstNameNum === "4") {
        firstNameNumX = "13";
      }
      else if (firstNameNum === "5") {
        firstNameNumX = "14";
      }
      else if (firstNameNum === "6") {
        firstNameNumX = "15"
      }

      if (secondNameNum === "4") {
        secondNameNumX = "13";
      }
      else if (secondNameNum === "5") {
        secondNameNumX = "14";
      }
      else if (secondNameNum === "6") {
        secondNameNumX = "15"
      }
    }

    if (round === 4 || round === 9) {

      if (firstNameNum === "7") {
        firstNameNumX = "13";
      }
      else if (firstNameNum === "8") {
        firstNameNumX = "14";
      }
      else if (firstNameNum === "9") {
        firstNameNumX = "15"
      }

      if (secondNameNum === "7") {
        secondNameNumX = "13";
      }
      else if (secondNameNum === "8") {
        secondNameNumX = "14";
      }
      else if (secondNameNum === "9") {
        secondNameNumX = "15"
      }
    }

    if (round === 5 || round === 10) {

      if (firstNameNum === "10") {
        firstNameNumX = "13";
      }
      else if (firstNameNum === "11") {
        firstNameNumX = "14";
      }
      else if (firstNameNum === "12") {
        firstNameNumX = "15"
      }

      if (secondNameNum === "10") {
        secondNameNumX = "13";
      }
      else if (secondNameNum === "11") {
        secondNameNumX = "14";
      }
      else if (secondNameNum === "12") {
        secondNameNumX = "15"
      }
    }

    
    
    // console.log("firstsecond", firstNameNumX, secondNameNumX);

    return ([firstNameNumX, secondNameNumX]);
  }


  const replacePlayerSorter = (round, firstNameNum, secondNameNum) => {

    if (tableUsed.length === 11) {

      if (extraPlayerCount === 1) {

        const [firstNameNumX, secondNameNumX] = change1PlayerTable12(round, firstNameNum, secondNameNum);
        // console.log("got:", firstNameNum, secondNameNum);
        // console.log("returning:", firstNameNumX, secondNameNumX);
        return [firstNameNumX, secondNameNumX];

      }

      else if (extraPlayerCount === 2) {

        const [firstNameNumX, secondNameNumX] = change2PlayerTable12(round, firstNameNum, secondNameNum);
        console.log("Tadah2");
        return [firstNameNumX, secondNameNumX];
      }

      else if (extraPlayerCount === 3) {

        const [firstNameNumX, secondNameNumX] = change3PlayerTable12(round, firstNameNum, secondNameNum);
        console.log("Tadah3");
        return [firstNameNumX, secondNameNumX];

      }
    
      else {
        console.log("Do nothing");
        return [firstNameNum, secondNameNum];
      }
    }
  }

  const findNames = (slot, roundrow) => {
    let firstNameNum = slot.substring(0, slot.indexOf("-"));
    let secondNameNum = slot.slice(slot.indexOf('-') + 1);

    const [firstNameNumNew, secondNameNumNew] = replacePlayerSorter(roundrow, firstNameNum, secondNameNum);

    firstNameNum = firstNameNumNew;
    secondNameNum = secondNameNumNew;

    let firstName = names[firstNameNum];
    if (firstName === "") {
      firstName = "P" + firstNameNum;
    }
    let secondName = names[secondNameNum];
    if (secondName === "") {
      secondName = "P" + secondNameNum;
    }

    const firstOut = firstNameNum != firstNameNumNew ? " out: " + names[firstNameNum] : "";
    const secondOut = secondNameNum != secondNameNumNew ? " out: " + names[secondNameNum] : "";
    console.log("firstOut", firstOut)

    return firstName + " & " + secondName + firstOut + secondOut;
  }

  const Matches = () => {

    let table = tableUsed;

    return(
      table.map((roundrow, index) => {
        if (index < amountOfRounds) {
          return (
            roundrow.map((match, index2) => {
              return(
                <div key={"jtn2" + index + index2}>{(index2 === 0) ? <h2>Round {index +1}</h2> : null}
                <p key={"jtn" + index}>Match {index2+1}: <br/> {roundrow[index2] && findNames(roundrow[index2][0], index+1) + 
                  " vs " + findNames(roundrow[index2][1], index+1)}
                </p>
                </div>
              )
            }))
        }
        else {
          return null
        }
      })
    )
  }



  const setNamesCallback = (names) => {
    setNames(["", ...names]);
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <header>Best Doubles Sorter App Thingy EVAR</header>
        <header>(For 12 to 19 players)</header>
        <div style={{marginTop: "20px"}}></div>

        <NamesInput setNamesCallback={(names) => setNamesCallback(names)}/>
        <PlayerNumberInput setPlayerCount={(x) => setPlayerCount(x)}/>
        <RoundInput setRound={(r) => setAmountOfRounds(r)}/>

        <Matches/>

        <p><br/><br/></p>
        <a
          className="App-link"
          href="https://fr.wikipedia.org/wiki/Table_de_Berger"
          target="_blank"
          rel="noopener noreferrer"
        >
          Based on Berger's Tables
        </a>
        
        <p><br/><br/></p>
        
        <div id="namesList">
        {
          names.map((name, index) => { 
            return index === 0 ? null : <Typography>{"Player " + index} {": " + name}</Typography>
          })
        }
        </div>
        <p>
        </p>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;

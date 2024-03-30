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
import { change3PlayerTable12 } from './PlayerReplacements/Players12/12players3extras.js';
import { change2PlayerTable12 } from './PlayerReplacements/Players12/12players2extras.js'
import { change1PlayerTable12 } from './PlayerReplacements/Players12/12player1extra.js';
import { change1PlayerTable16 } from './PlayerReplacements/Players16/16player1extra.js';
import { change2PlayerTable16 } from './PlayerReplacements/Players16/16player2extras.js';
import { change3PlayerTable16 } from './PlayerReplacements/Players16/16player3extras.js';

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


  const replacePlayerSorter = (round, firstNameNum, secondNameNum) => {

    if (tableUsed.length === 11) {

      if (extraPlayerCount === 1) {
        const [firstNameNumX, secondNameNumX] = change1PlayerTable12(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }

      else if (extraPlayerCount === 2) {
        const [firstNameNumX, secondNameNumX] = change2PlayerTable12(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }

      else if (extraPlayerCount === 3) {
        const [firstNameNumX, secondNameNumX] = change3PlayerTable12(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }
    
      else {
        return [firstNameNum, secondNameNum];
      }
    }

    else if (tableUsed.length === 15) {
      // console.log("Did we get here?")
      if (extraPlayerCount === 1) {
        const [firstNameNumX, secondNameNumX] = change1PlayerTable16(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }

      else if (extraPlayerCount === 2) {
        const [firstNameNumX, secondNameNumX] = change2PlayerTable16(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }

      else if (extraPlayerCount === 3) {
        const [firstNameNumX, secondNameNumX] = change3PlayerTable16(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }
    
      else {
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
        <div><p></p></div>
        <header>Best Doubles Sorter App Thingy EVAR</header>
        <header>(For 12 to 19 players)</header>
        <div style={{marginTop: "20px"}}></div>

        <PlayerNumberInput setPlayerCount={(x) => setPlayerCount(x)}/>
        <NamesInput setNamesCallback={(names) => setNamesCallback(names)} numberOfPlayers={playerCount} names={names}/>
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

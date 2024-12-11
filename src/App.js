// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import * as tables from './Tables/tables.js';
import { RoundInput } from './Inputs/RoundInput';
import { NamesInput } from './Inputs/NamesInput';
import { PlayerNumberInput } from './Inputs/PlayerNumberInput.js';
import {green, blue, purple} from "@mui/material/colors";
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { change1PlayerTable12 } from './PlayerReplacements/Players12/12player1extra.js';
import { change2PlayerTable12 } from './PlayerReplacements/Players12/12players2extras.js'
import { change3PlayerTable12 } from './PlayerReplacements/Players12/12players3extras.js';

import { change1PlayerTable16 } from './PlayerReplacements/Players16/16player1extra.js';
import { change2PlayerTable16 } from './PlayerReplacements/Players16/16player2extras.js';
import { change3PlayerTable16 } from './PlayerReplacements/Players16/16player3extras.js';

import { change1PlayerTable20 } from './PlayerReplacements/Players20/20player1extra.js';
import { change2PlayerTable20 } from './PlayerReplacements/Players20/20players2extras.js';
import { change3PlayerTable20 } from './PlayerReplacements/Players20/20players3extras.js';

import { change1PlayerTable24 } from './PlayerReplacements/Players24/24player1extra.js';
import { change2PlayerTable24 } from './PlayerReplacements/Players24/24players2extras.js';
import { change3PlayerTable24 } from './PlayerReplacements/Players24/24players3extras.js';

import { RandomizeTable } from './Inputs/RandomizeTable.js';

// import Fab from '@mui/material/Fab';
// import NavigationIcon from '@mui/icons-material/Navigation';

export const versionType = { original: "original", default: "default", random: "random"};


function App() {

  const prefersDarkMode = true; // useMediaQuery('(prefers-color-scheme: dark)');

  const [names, setNames] = useState([]);

  const [playerCount, setPlayerCount] = useState(12);
  const [extraPlayerCount, setExtraPlayerCount] = useState(0);

  const [amountOfRounds, setAmountOfRounds] = useState(1);
  
  const [tableUsed, setTableUsed] = useState(tables.tarr12);

  const [tableVersion, setTableVersion] = useState(versionType.default);

  const [random12, setRandom12] = useState(tables.tarr12);
  const [random16, setRandom16] = useState(tables.tarr16);
  const [random20, setRandom20] = useState(tables.tarr20);
  const [random24, setRandom24] = useState(tables.tarr24);

  const [randomiseAgain, setRandomiseAgain] = useState(false);

  useEffect(() => {
    if (0 < playerCount && playerCount < 16) {
      if (tableVersion === versionType.default) {
        console.log("does this get triggered")
        setTableUsed(tables.tarr12);
      }
      else if (tableVersion === versionType.original) {
        setTableUsed(tables.tarr12original);
      }
      else {
        setTableUsed(random12);
      }
    }

    if (15 < playerCount && playerCount < 20) {
      if (tableVersion === versionType.default) {
        setTableUsed(tables.tarr16);
      }
      else if (tableVersion === versionType.original) {
        setTableUsed(tables.tarr16original);
      }
      else {
        setTableUsed(random16);
      }
    }

    if (19 < playerCount && playerCount < 24) {
      if (tableVersion === versionType.default) {
        setTableUsed(tables.tarr20);
      }
      else if (tableVersion === versionType.original) {
        setTableUsed(tables.tarr20original);
      }
      else {
        setTableUsed(random20);
      }
    }

    if (23 < playerCount && playerCount < 28) {
      if (tableVersion === versionType.default) {
        setTableUsed(tables.tarr24);
      }
      else if (tableVersion === versionType.original) {
        setTableUsed(tables.tarr24original);
      }
      else {
        setTableUsed(random24);
      }
    }

    if (playerCount === 12 || playerCount === 16 || playerCount === 20 || playerCount === 24) {
      setExtraPlayerCount(0);
    }

    if (playerCount === 13 || playerCount === 17 || playerCount === 21 || playerCount === 25) {
      setExtraPlayerCount(1);
    }

    if (playerCount === 14 || playerCount === 18 || playerCount === 22 || playerCount === 26) {
      setExtraPlayerCount(2);
    }

    if (playerCount === 15 || playerCount === 19 || playerCount === 23 || playerCount === 27) {
      setExtraPlayerCount(3);
    }

    setRandomiseAgain(false);
  }, [playerCount, tableVersion, versionType, randomiseAgain]);

  useEffect(() => {
    console.log("extraPlayerCount", extraPlayerCount)
  }, [extraPlayerCount]);

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: purple[500]
      },
      secondary: {
        main: purple[500]
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
    else if (tableUsed.length === 19) {
      // console.log("Did we get here?")
      if (extraPlayerCount === 1) {
        const [firstNameNumX, secondNameNumX] = change1PlayerTable20(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }

      else if (extraPlayerCount === 2) {
        const [firstNameNumX, secondNameNumX] = change2PlayerTable20(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }

      else if (extraPlayerCount === 3) {
        const [firstNameNumX, secondNameNumX] = change3PlayerTable20(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }
    
      else {
        return [firstNameNum, secondNameNum];
      }
    }
    else if (tableUsed.length === 23) {
      // console.log("Did we get here?")
      if (extraPlayerCount === 1) {
        const [firstNameNumX, secondNameNumX] = change1PlayerTable24(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }

      else if (extraPlayerCount === 2) {
        const [firstNameNumX, secondNameNumX] = change2PlayerTable24(round, firstNameNum, secondNameNum);
        return [firstNameNumX, secondNameNumX];
      }

      else if (extraPlayerCount === 3) {
        const [firstNameNumX, secondNameNumX] = change3PlayerTable24(round, firstNameNum, secondNameNum);
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
        <header>Let's Sort the Players!</header>
        <p>(For 12 to 27 players)</p>
        <div style={{marginTop: "20px"}}></div>

        <PlayerNumberInput setPlayerCount={(x) => setPlayerCount(x)}/>
        <NamesInput setNamesCallback={(names) => setNamesCallback(names)} numberOfPlayers={playerCount} names={names}/>
        <RoundInput setRound={(r) => setAmountOfRounds(r)} tableUsed={tableUsed}/>
        <RandomizeTable 
          setTableVersion={(versionType) => setTableVersion(versionType)} 
          setRandom12={setRandom12} 
          setRandom16={setRandom16}
          setRandom20={setRandom20}
          setRandom24={setRandom24}
          setRandomiseAgain={(bool) => setRandomiseAgain(bool)}
        />

        <Matches/>

        
        
        <p><br/><br/></p>
        
        <div id="namesList">
        {
          names.map((name, index) => { 
            return index === 0 ? null : <Typography key={"plainNames" + index}>{"Player " + index} {": " + name}</Typography>
          })
        }
        </div>
        <p><br/><br/></p>
        <a
          className="App-link"
          href="https://fr.wikipedia.org/wiki/Table_de_Berger"
          target="_blank"
          rel="noopener noreferrer"
        >
          Based on Berger's Tables
        </a>
        <p>
        </p>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;

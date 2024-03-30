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

  const [amountOfRounds, setAmountOfRounds] = useState(1);
  
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: blue[500]
      }
    }
  })

  /*
  const setMatches12 = (arrRow) => {
    if (arrRow === tables.arr12row1) {
      setRound1([[tables.arr12row1[0], tables.arr12row1[1]], [tables.arr12row1[2], tables.arr12row1[3]], [tables.arr12row1[4], tables.arr12row1[5]]]);
    }
    if (arrRow === tables.arr12row2) {
      setRound2([[tables.arr12row2[0], tables.arr12row2[1]], [tables.arr12row2[2], tables.arr12row2[3]], [tables.arr12row2[4], tables.arr12row2[5]]]);
    }
  }*/


  const findNames = (slot) => {
    const firstNameNum = slot.substring(0, slot.indexOf("-"));
    const secondNameNum = slot.slice(slot.indexOf('-') + 1);
    let firstName = names[firstNameNum];
    if (firstName === "") {
      firstName = "P" + firstNameNum;
    }
    let secondName = names[secondNameNum];
    if (secondName === "") {
      secondName = "P" + secondNameNum;
    }
    return firstName + " & " + secondName;
  }

  const Matches = () => {

    let table;

    if (0 < playerCount && playerCount < 16) {
      table = tables.tarr12;
    }

    if (15 < playerCount && playerCount < 20) {
      table = tables.tarr16;
    }

    return(
      table.map((roundrow, index) => {
        if (index < amountOfRounds) {
          return (
            roundrow.map((match, index2) => {
              return(
                <div key={"jtn2" + index + index2}>{(index2 === 0) ? <h2>Round {index +1}</h2> : null}
                <p key={"jtn" + index}>Match {index2+1}: <br/> {roundrow[index2] && findNames(roundrow[index2][0]) + 
                  " vs " + findNames(roundrow[index2][1])}
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

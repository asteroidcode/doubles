import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import * as tables from './Tables/tables.js';
import { RoundInput } from './Inputs/RoundInput';
import { NamesInput } from './Inputs/NamesInput';
import {blue} from "@mui/material/colors";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [names, setNames] = useState([]);
  const [rounds, setRounds] = useState([]);

  const [round1, setRound1] = useState([]);
  const [round2, setRound2] = useState([]);
  const [round3, setRound3] = useState([]);
  const [round4, setRound4] = useState([]);
  const [round5, setRound5] = useState([]);
  const [round6, setRound6] = useState([]);

  const [amountOfRounds, setAmountOfRounds] = useState(1);
  
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: blue[500]
      }
    }
  })

  const setMatches12 = (arrRow) => {
    if (arrRow === tables.arr12row1) {
      setRound1([[tables.arr12row1[0], tables.arr12row1[1]], [tables.arr12row1[2], tables.arr12row1[3]], [tables.arr12row1[4], tables.arr12row1[5]]]);
    }
    if (arrRow === tables.arr12row2) {
      setRound2([[tables.arr12row2[0], tables.arr12row2[1]], [tables.arr12row2[2], tables.arr12row2[3]], [tables.arr12row2[4], tables.arr12row2[5]]]);
    }
  }

  const setMatches = (arrRow) => {
    if (arrRow === tables.arr16row1) {
      setRound1([[tables.arr16row1[0], tables.arr16row1[1]], [tables.arr16row1[2], tables.arr16row1[3]], [tables.arr16row1[4], tables.arr16row1[5]], [tables.arr16row1[6], tables.arr16row1[7]]]);
    }
    if (arrRow === tables.arr16row2) {
      setRound2([[tables.arr16row2[0], tables.arr16row2[1]], [tables.arr16row2[2], tables.arr16row2[3]], [tables.arr16row2[4], tables.arr16row2[5]], [tables.arr16row2[6], tables.arr16row2[7]]]);
    }
    if (arrRow === tables.arr16row3) {
      setRound3([[tables.arr16row3[0], tables.arr16row3[1]], [tables.arr16row3[2], tables.arr16row3[3]], [tables.arr16row3[4], tables.arr16row3[5]], [tables.arr16row3[6], tables.arr16row3[7]]]);
    }
    if (arrRow === tables.arr16row4) {
      setRound4([[tables.arr16row4[0], tables.arr16row4[1]], [tables.arr16row4[2], tables.arr16row4[3]], [tables.arr16row4[4], tables.arr16row4[5]], [tables.arr16row4[6], tables.arr16row4[7]]]);
    }
    if (arrRow === tables.arr16row5) {
      setRound5([[tables.arr16row5[0], tables.arr16row5[1]], [tables.arr16row5[2], tables.arr16row5[3]], [tables.arr16row5[4], tables.arr16row5[5]], [tables.arr16row5[6], tables.arr16row5[7]]]);
    }
    if (arrRow === tables.arr16row6) {
      setRound6([[tables.arr16row6[0], tables.arr16row6[1]], [tables.arr16row6[2], tables.arr16row6[3]], [tables.arr16row6[4], tables.arr16row6[5]], [tables.arr16row6[6], tables.arr16row6[7]]]);
    }
  }

  useEffect(() => {
    if (amountOfRounds === 1) {
      setMatches(tables.arr16row1);
    }
    if (amountOfRounds === 2) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
    }
    if (amountOfRounds === 3) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
    }
    if (amountOfRounds === 4) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
    }
    if (amountOfRounds === 5) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
    }
    if (amountOfRounds === 6) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
      setMatches(tables.arr16row6);
    }
    
  }, [amountOfRounds]);

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

  const Round = ({num, round}) => {
    console.log("num, round", num, round);
    return(
      <>
        <h2>Round {num}</h2>
          { round.map((match, index) => {
              return(
                <p key={"rounds" + index}>Match {index+1}: <br/> {round[index] && findNames(round[index][0]) + 
                " vs " + findNames(round[index][1])}</p> 
              )
            })
          }
        <p></p>
      </>
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
        <header>(For 16 players)</header>

        <NamesInput setNamesCallback={(names) => setNamesCallback(names)}/>
        <RoundInput setRound={(r) => setAmountOfRounds(r)}/>


        {amountOfRounds === 1 && <Round num={1} round={round1}/>}
        {amountOfRounds === 2 && <><Round num={1} round={round1}/><Round num={2} round={round2}/></>}
        {amountOfRounds === 3 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/></>}
        {amountOfRounds === 4 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/></>}
        {amountOfRounds === 5 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/></>}
        {amountOfRounds === 6 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/></>}

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

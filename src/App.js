// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import * as tables from './Tables/tables.js';
import { RoundInput } from './Inputs/RoundInput';
import { NamesInput } from './Inputs/NamesInput';
import {blue} from "@mui/material/colors";
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
// import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  const prefersDarkMode = true; // useMediaQuery('(prefers-color-scheme: dark)');

  const [names, setNames] = useState([]);
  // const [rounds, setRounds] = useState([]);

  const [round1, setRound1] = useState([]);
  const [round2, setRound2] = useState([]);
  const [round3, setRound3] = useState([]);
  const [round4, setRound4] = useState([]);
  const [round5, setRound5] = useState([]);
  const [round6, setRound6] = useState([]);
  const [round7, setRound7] = useState([]);
  const [round8, setRound8] = useState([]);
  const [round9, setRound9] = useState([]);
  const [round10, setRound10] = useState([]);
  const [round11, setRound11] = useState([]);
  const [round12, setRound12] = useState([]);
  const [round13, setRound13] = useState([]);
  const [round14, setRound14] = useState([]);
  const [round15, setRound15] = useState([]);

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
    if (arrRow === tables.arr16row7) {
      setRound7([[tables.arr16row7[0], tables.arr16row7[1]], [tables.arr16row7[2], tables.arr16row7[3]], [tables.arr16row7[4], tables.arr16row7[5]], [tables.arr16row7[6], tables.arr16row7[7]]]);
    }
    if (arrRow === tables.arr16row8) {
      setRound8([[tables.arr16row8[0], tables.arr16row8[1]], [tables.arr16row8[2], tables.arr16row8[3]], [tables.arr16row8[4], tables.arr16row8[5]], [tables.arr16row8[6], tables.arr16row8[7]]]);
    }
    if (arrRow === tables.arr16row9) {
      setRound9([[tables.arr16row9[0], tables.arr16row9[1]], [tables.arr16row9[2], tables.arr16row9[3]], [tables.arr16row9[4], tables.arr16row9[5]], [tables.arr16row9[6], tables.arr16row9[7]]]);
    }
    if (arrRow === tables.arr16row10) {
      setRound10([[tables.arr16row10[0], tables.arr16row10[1]], [tables.arr16row10[2], tables.arr16row10[3]], [tables.arr16row10[4], tables.arr16row10[5]], [tables.arr16row10[6], tables.arr16row10[7]]]);
    }
    if (arrRow === tables.arr16row11) {
      setRound11([[tables.arr16row11[0], tables.arr16row11[1]], [tables.arr16row11[2], tables.arr16row11[3]], [tables.arr16row11[4], tables.arr16row11[5]], [tables.arr16row11[6], tables.arr16row11[7]]]);
    }
    if (arrRow === tables.arr16row12) {
      setRound12([[tables.arr16row12[0], tables.arr16row12[1]], [tables.arr16row12[2], tables.arr16row12[3]], [tables.arr16row12[4], tables.arr16row12[5]], [tables.arr16row12[6], tables.arr16row12[7]]]);
    }
    if (arrRow === tables.arr16row13) {
      setRound13([[tables.arr16row13[0], tables.arr16row13[1]], [tables.arr16row13[2], tables.arr16row13[3]], [tables.arr16row13[4], tables.arr16row13[5]], [tables.arr16row13[6], tables.arr16row13[7]]]);
    }
    if (arrRow === tables.arr16row14) {
      setRound14([[tables.arr16row14[0], tables.arr16row14[1]], [tables.arr16row14[2], tables.arr16row14[3]], [tables.arr16row14[4], tables.arr16row14[5]], [tables.arr16row14[6], tables.arr16row14[7]]]);
    }
    if (arrRow === tables.arr16row15) {
      setRound15([[tables.arr16row15[0], tables.arr16row15[1]], [tables.arr16row15[2], tables.arr16row15[3]], [tables.arr16row15[4], tables.arr16row15[5]], [tables.arr16row15[6], tables.arr16row15[7]]]);
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
    if (amountOfRounds === 7) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
      setMatches(tables.arr16row6);
      setMatches(tables.arr16row7);
    }
    if (amountOfRounds === 8) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
      setMatches(tables.arr16row6);
      setMatches(tables.arr16row7);
      setMatches(tables.arr16row8);
    }
    if (amountOfRounds === 9) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
      setMatches(tables.arr16row6);
      setMatches(tables.arr16row7);
      setMatches(tables.arr16row8);
      setMatches(tables.arr16row9);
    }
    if (amountOfRounds === 10) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
      setMatches(tables.arr16row6);
      setMatches(tables.arr16row7);
      setMatches(tables.arr16row8);
      setMatches(tables.arr16row9);
      setMatches(tables.arr16row10);
    }
    if (amountOfRounds === 11) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
      setMatches(tables.arr16row6);
      setMatches(tables.arr16row7);
      setMatches(tables.arr16row8);
      setMatches(tables.arr16row9);
      setMatches(tables.arr16row10);
      setMatches(tables.arr16row11);
    }
    if (amountOfRounds === 12) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
      setMatches(tables.arr16row6);
      setMatches(tables.arr16row7);
      setMatches(tables.arr16row8);
      setMatches(tables.arr16row9);
      setMatches(tables.arr16row10);
      setMatches(tables.arr16row11);
      setMatches(tables.arr16row12);
    }
    if (amountOfRounds === 13) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
      setMatches(tables.arr16row6);
      setMatches(tables.arr16row7);
      setMatches(tables.arr16row8);
      setMatches(tables.arr16row9);
      setMatches(tables.arr16row10);
      setMatches(tables.arr16row11);
      setMatches(tables.arr16row12);
      setMatches(tables.arr16row13);
    }
    if (amountOfRounds === 14) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
      setMatches(tables.arr16row6);
      setMatches(tables.arr16row7);
      setMatches(tables.arr16row8);
      setMatches(tables.arr16row9);
      setMatches(tables.arr16row10);
      setMatches(tables.arr16row11);
      setMatches(tables.arr16row12);
      setMatches(tables.arr16row13);
      setMatches(tables.arr16row14);
    }
    if (amountOfRounds === 15) {
      setMatches(tables.arr16row1);
      setMatches(tables.arr16row2);
      setMatches(tables.arr16row3);
      setMatches(tables.arr16row4);
      setMatches(tables.arr16row5);
      setMatches(tables.arr16row6);
      setMatches(tables.arr16row7);
      setMatches(tables.arr16row8);
      setMatches(tables.arr16row9);
      setMatches(tables.arr16row10);
      setMatches(tables.arr16row11);
      setMatches(tables.arr16row12);
      setMatches(tables.arr16row13);
      setMatches(tables.arr16row14);
      setMatches(tables.arr16row15);
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
        <div style={{marginTop: "20px"}}></div>

        <NamesInput setNamesCallback={(names) => setNamesCallback(names)}/>
        <RoundInput setRound={(r) => setAmountOfRounds(r)}/>


        {amountOfRounds === 1 && <Round num={1} round={round1}/>}
        {amountOfRounds === 2 && <><Round num={1} round={round1}/><Round num={2} round={round2}/></>}
        {amountOfRounds === 3 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/></>}
        {amountOfRounds === 4 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/></>}
        {amountOfRounds === 5 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/></>}
        {amountOfRounds === 6 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/></>}
        {amountOfRounds === 7 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/><Round num={7} round={round7}/></>}
        {amountOfRounds === 8 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/><Round num={7} round={round7}/><Round num={8} round={round8}/></>}
        {amountOfRounds === 9 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/><Round num={7} round={round7}/><Round num={8} round={round8}/><Round num={9} round={round9}/></>}
        {amountOfRounds === 10 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/><Round num={7} round={round7}/><Round num={8} round={round8}/><Round num={9} round={round9}/><Round num={10} round={round10}/></>}
        {amountOfRounds === 11 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/><Round num={7} round={round7}/><Round num={8} round={round8}/><Round num={9} round={round9}/><Round num={10} round={round10}/><Round num={11} round={round11}/></>}
        {amountOfRounds === 12 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/><Round num={7} round={round7}/><Round num={8} round={round8}/><Round num={9} round={round9}/><Round num={10} round={round10}/><Round num={11} round={round11}/><Round num={12} round={round12}/></>}
        {amountOfRounds === 13 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/><Round num={7} round={round7}/><Round num={8} round={round8}/><Round num={9} round={round9}/><Round num={10} round={round10}/><Round num={11} round={round11}/><Round num={12} round={round12}/><Round num={13} round={round13}/></>}
        {amountOfRounds === 14 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/><Round num={7} round={round7}/><Round num={8} round={round8}/><Round num={9} round={round9}/><Round num={10} round={round10}/><Round num={11} round={round11}/><Round num={12} round={round12}/><Round num={13} round={round12}/><Round num={14} round={round14}/></>}
        {amountOfRounds === 15 && <><Round num={1} round={round1}/><Round num={2} round={round2}/><Round num={3} round={round3}/><Round num={4} round={round4}/><Round num={5} round={round5}/><Round num={6} round={round6}/><Round num={7} round={round7}/><Round num={8} round={round8}/><Round num={9} round={round9}/><Round num={10} round={round10}/><Round num={11} round={round11}/><Round num={12} round={round12}/><Round num={13} round={round12}/><Round num={14} round={round14}/><Round num={15} round={round15}/></>}
        
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

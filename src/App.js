import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import * as tables from './Tables/tables.js';
import { RoundInput } from './Inputs/RoundInput';

function App() {

  const [names, setNames] = useState([]);
  const [rounds, setRounds] = useState([]);

  const [round1, setRound1] = useState([]);
  const [round2, setRound2] = useState([]);

  const [amountOfRounds, setAmountOfRounds] = useState(1);
  
  const setMatches = (arrRow) => {
    if (arrRow === tables.arr12row1) {
      setRound1([[tables.arr12row1[0], tables.arr12row1[1]], [tables.arr12row1[2], tables.arr12row1[3]], [tables.arr12row1[4], tables.arr12row1[5]]]);
    }
    if (arrRow === tables.arr12row2) {
      setRound2([[tables.arr12row2[0], tables.arr12row2[1]], [tables.arr12row2[2], tables.arr12row2[3]], [tables.arr12row2[4], tables.arr12row2[5]]]);
    }
  }

  useEffect(() => {
    if (amountOfRounds === 1) {
      setMatches(tables.arr12row1);
    }
    if (amountOfRounds === 2) {
      setMatches(tables.arr12row1);
      setMatches(tables.arr12row2);
    }
    if (amountOfRounds > 2) {
      setMatches(tables.arr12row1);
      setMatches(tables.arr12row2)
    }
    setNames(["", "Janeway", "Sisko", "", "", "", "", "", "", "", "", "", ""]);
  }, []);

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
    return(
      <>
        <h2>Round {num}</h2>
          { round.map((match, index) => {
              return(
                <p key={index}>Match {index+1}: <br/> {round[index] && findNames(round[index][0]) + 
                " vs " + findNames(round[index][1])}</p> 
              )
            })
          }
        <p></p>
      </>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <RoundInput setRound={(r) => setAmountOfRounds(r)}/>


        {amountOfRounds === 1 && <Round num={1} round={round1}/>}
        {amountOfRounds === 2 && <><Round num={1} round={round1}/><Round num={2} round={round2}/></>}


        <a
          className="App-link"
          href="https://fr.wikipedia.org/wiki/Table_de_Berger"
          target="_blank"
          rel="noopener noreferrer"
        >
          This app is based on Berger's Tables
        </a>
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;

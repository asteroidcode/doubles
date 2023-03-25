import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import * as tables from './Tables/tables.js';


function App() {

  const [names, setNames] = useState([]);
  const [rounds, setRounds] = useState([]);

  const [round1, setRound1] = useState([]);
  const [round2, setRound2] = useState([]);
  
  const setMatches = (arrRow) => {
    if (arrRow === tables.arr12row1) {
      setRound1([[tables.arr12row1[0], tables.arr12row1[1]], [tables.arr12row1[2], tables.arr12row1[3]], [tables.arr12row1[4], tables.arr12row1[5]]]);
    }
    if (arrRow === tables.arr12row2) {
      setRound2([[tables.arr12row2[0], tables.arr12row2[1]], [tables.arr12row2[2], tables.arr12row2[3]], [tables.arr12row2[4], tables.arr12row2[5]]]);
    }
  }

  useEffect(() => {
    setMatches(tables.arr12row1);
    setMatches(tables.arr12row2);
    setNames(["", "Janeway", "Sisko", "", "", "", "", "", "", "", "", "", ""]);
    console.log("round1", round1)
    //console.log("names", names);
  }, []);

  const findNames = (slot) => {
    console.log("slot", slot);
    const firstNameNum = slot.substring(0, slot.indexOf("-"));
    console.log("firstNameNum", firstNameNum);
    const secondNameNum = slot.slice(slot.indexOf('-') + 1);
    //console.log("firstNameNum", firstNameNum);
    let firstName = names[firstNameNum];
    if (firstName === "") {
      firstName = "P" + firstNameNum;
    }
    //console.log("firstName", firstName);
    let secondName = names[secondNameNum];
    if (secondName === "") {
      secondName = "P" + secondNameNum;
    }
    return firstName + " & " + secondName;
  }

  const Round = ({num}) => {
    return(
      <>
        <h2>Round {num}</h2>
        
        {
          num === 1 &&
          <>
            <p>Match 1: <br/> {round1[0] && findNames(round1[0][0]) + 
              " vs " + findNames(round1[0][1])}</p> 
            <p>Match 2: <br/> {round1[1] && findNames(round1[1][0]) + 
              " vs " + findNames(round1[1][1])}</p>
            <p>Match 3: <br/> {round1[2] && findNames(round1[2][0]) + 
              " vs " + findNames(round1[2][1])}</p>
            <p></p>
          </>
        }
        {
          num === 2 &&
          
          <>

            <p>Match 1: <br/> {round2[0] && findNames(round2[0][0]) + 
              " vs " + findNames(round2[0][1])}</p> 
            <p>Match 2: <br/> {round2[1] && findNames(round2[1][0]) + 
              " vs " + findNames(round2[1][1])}</p>
            <p>Match 3: <br/> {round2[2] && findNames(round2[2][0]) + 
              " vs " + findNames(round2[2][1])}</p>
            <p></p>
          <p></p>
          </>
        }

      </>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       

        <Round num={1}/>
        <Round num={2}/>


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

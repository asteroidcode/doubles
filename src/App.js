import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import * as tables from './Tables/tables.js';


function App() {


  const [name1, setName1] = useState("Janeway");
  const [name2, setName2] = useState("Sisko");
  const [name3, setName3] = useState("P03");
  const [name4, setName4] = useState("P04");
  const [name5, setName5] = useState("P05");
  const [name6, setName6] = useState("P06");
  const [name7, setName7] = useState("P07");
  const [name8, setName8] = useState("P08");
  const [name9, setName9] = useState("P09");
  const [name10, setName10] = useState("P10");
  const [name11, setName11] = useState("P11");
  const [name12, setName12] = useState("P12");

  const [names, setNames] = useState(["", name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11, name12]);


  const [r01m01, setR01m01] = useState(null);
  const [r01m02, setR01m02] = useState(null);
  const [r01m03, setR01m03] = useState(null);
  const [r02m01, setR02m01] = useState(null);
  const [r02m02, setR02m02] = useState(null);
  const [r02m03, setR02m03] = useState(null);
  
  const setMatches = (arrRow) => {
    if (arrRow === tables.arr12row1) {
      setR01m01([tables.arr12row1[0], tables.arr12row1[1]]);
      setR01m02([tables.arr12row1[2], tables.arr12row1[3]]);
      setR01m03([tables.arr12row1[4], tables.arr12row1[5]]);
    }
    if (arrRow === tables.arr12row2) {
      setR02m01([tables.arr12row2[0], tables.arr12row2[1]]);
      setR02m02([tables.arr12row2[2], tables.arr12row2[3]]);
      setR02m03([tables.arr12row2[4], tables.arr12row2[5]]);
    }
  }

  useEffect(() => {
    setMatches(tables.arr12row1);
    setMatches(tables.arr12row2);
    setNames(["", name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11, name12]);
    
    //console.log("names", names);
  }, []);

  const findNames = (slot) => {
    //console.log("slot", slot);
    const firstNameNum = slot.substring(0, slot.indexOf("-"));
    const secondNameNum = slot.slice(slot.indexOf('-') + 1);
    //console.log("firstNameNum", firstNameNum);
    const firstName = names[firstNameNum];
    //console.log("firstName", firstName);
    const secondName = names[secondNameNum];
    return firstName + " & " + secondName;
  }

  const Round = ({num}) => {
    return(
      <>
        <h2>Round {num}</h2>
        
        {
          num === 1 &&
          <>
            <p>Match 1: <br/> {r01m01 && findNames(r01m01[0]) + 
              " vs " + findNames(r01m01[1])}</p> 
            <p>Match 2: <br/> {r01m02 && findNames(r01m02[0]) + 
              " vs " + findNames(r01m02[1])}</p>
            <p>Match 3: <br/> {r01m03 && findNames(r01m03[0]) + 
              " vs " + findNames(r01m03[1])}</p>
            <p></p>
          </>
        }
        {
          num === 2 &&
          
          <>

          <p>Match 1: <br/> {r02m01 && findNames(r02m01[0]) + 
            " vs " + findNames(r02m01[1])}</p> 
          
          <p>Match 2: <br/> {r02m02 && findNames(r02m02[0]) + 
            " vs " + findNames(r02m02[1])}</p>
          <p>Match 3: <br/> {r02m03 && findNames(r02m03[0]) + 
            " vs " + findNames(r02m03[1])}</p>
  
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
          Source for Table de Bergers
        </a>
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;

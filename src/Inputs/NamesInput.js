import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NamesNumberInput } from './NamesNumberInput';

export const NamesInput = ({setNamesCallback}) => {

  const [names, setNames] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);

  useEffect(() => {
    processParticipantNumberChange(19);
  }, []);

  useEffect(() => {
    console.log("names", names);
    setNamesCallback(names);
  }, [names]);

  const setName = (value, index) => {
    const nextNames = names.map((n, i) => {
      if (i === index) {
        return value;
      }
      else {
        return n;
      }
    })
    setNames(nextNames);
  }

  const processParticipantNumberChange = (nbr) => {
    // console.log("nbr", nbr);
    let newNames = [...names];
    if (newNames.length < nbr) {
      const namesShorterBy = nbr - newNames.length;
      // console.log("namesShorterBy", namesShorterBy);
      for (let i = 0; i < namesShorterBy; i++ ) {
        newNames.push([""]);
      }
    }
    if (newNames.length > nbr) {
      const namesLongerBy = newNames.length > nbr;
      for (let i = 0; i < namesLongerBy; i++) {
        newNames.pop();
      }
    }
    // console.log("newNames", newNames);
    setNames(newNames);
  }

  return( <>
  <NamesNumberInput setNamesNbr={(nbr) => processParticipantNumberChange(nbr)}/>
  <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    {names.map((name, index) => {
      return(
        <div key={"jtn" + index}>
        
        <TextField 
          color="primary"
          margin="normal"
          id={"outlined-" + index} 
          label={"P" + (index+1) + " Name"} 
          variant="outlined" 
          autoComplete="off"
          value={name} 
          onChange={(event) => {setName(event.target.value, index)}}
        />
        </div>
      )
    })}
  </Box>
  </>)
}
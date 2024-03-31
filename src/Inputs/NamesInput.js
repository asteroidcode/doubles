import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NamesNumberInput } from './NamesNumberInput';
import { ShuffleConfirmDialog } from '../Dialogs/ShuffleConfirmDialog';

export const NamesInput = ({setNamesCallback, numberOfPlayers, names2}) => {

  const [names, setNames] = useState(["", "", "", "", "", "", "", "", "", "", "", ""]);

  const [shuffleConfirmOpen, setShuffleConfirmOpen] = useState(false);

  useEffect(() => {
    processParticipantNumberChange(numberOfPlayers);
  }, [numberOfPlayers]);

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
        newNames.push("");
      }
    }
    if (newNames.length > nbr) {
      const namesLongerBy = newNames.length - nbr;
      for (let i = 0; i < namesLongerBy; i++) {
        newNames.pop();
      }
    }
    // console.log("newNames", newNames);
    setNames(newNames);
    setNamesCallback(newNames);
  }

  // thanks for the shuffle example to Grant Riordan https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  const randomizeNamesOrder = () => {
    let newNames = [...names];
    const shuffledNames = shuffle(newNames);

    setNames(shuffledNames);
    setNamesCallback(shuffledNames);
  }
  const closeShuffleDialog = () => {
    setShuffleConfirmOpen(false);
  }

  return( <>
  <p></p>
  <Button onClick={() => setShuffleConfirmOpen(true)} variant="contained">Randomise Player Order</Button>
  <p></p>
  <ShuffleConfirmDialog isOpen={shuffleConfirmOpen} close={closeShuffleDialog} randomizeOrder={randomizeNamesOrder}/>
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
        <div key={"namesInputs" + index}>
        
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
import React, {useState} from 'react';
//import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const RoundInput = ({setRound, tableUsed}) => {

  const [roundNumber, setRoundNumber] = useState(1);

  const handleChange = (event) => {
    setRoundNumber(event.target.value);
    setRound(event.target.value);
  }

  return(
    <FormControl variant="filled" sx={{ m: 1, minWidth: 80}} style={{marginTop: "70px"}}>
      <InputLabel id="round-number-insert">Rounds</InputLabel>
      <Select
        labelId="round-number-label"
        id="round-number-select"
        value={roundNumber}
        label="Number of rounds"
        onChange={handleChange}
      >
        {
          tableUsed.map((tableRow, index) => {
            return(<MenuItem key={"menuitem" + tableRow + index} value={index+1}>{index+1}</MenuItem>)
          })
        }
      </Select>
    </FormControl>
  )
}
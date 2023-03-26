import React, {useState} from 'react';
//import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const RoundInput = ({setRound}) => {

  const [roundNumber, setRoundNumber] = useState(1);

  const handleChange = (event) => {
    setRoundNumber(event.target.value);
    setRound(event.target.value);
  }

  return(
    <FormControl variant="filled" sx={{ m: 1, minWidth: 80}}>
      <InputLabel id="round-number-insert">Rounds</InputLabel>
      <Select
        labelId="round-number-label"
        id="round-number-select"
        value={roundNumber}
        label="Number of rounds"
        onChange={handleChange}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
      </Select>
    </FormControl>
  )
}
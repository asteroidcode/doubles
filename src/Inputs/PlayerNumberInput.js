import React, {useState} from 'react';
//import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const PlayerNumberInput = ({setPlayerCount}) => {

  const [playerNumber, setPlayerNumber] = useState(12);

  const handleChange = (event) => {
    setPlayerNumber(event.target.value);
    setPlayerCount(event.target.value);
  }

  return(
    <FormControl variant="filled" sx={{ m: 1, minWidth: 80}} style={{marginTop: "40px"}}>
      <InputLabel id="round-number-insert">Players</InputLabel>
      <Select
        labelId="round-number-label"
        id="round-number-select"
        value={playerNumber}
        label="Number of rounds"
        onChange={handleChange}
      >
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={13}>13</MenuItem>
        <MenuItem value={14}>14</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={17}>17</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={19}>19</MenuItem>
      </Select>
    </FormControl>
  )
}
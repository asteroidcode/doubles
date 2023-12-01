import React, {useState} from 'react';
//import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const NamesNumberInput = ({setNamesNbr}) => {

  const [namesNumber, setNamesNumber] = useState(16);

  const handleChange = (event) => {
    setNamesNumber(event.target.value);
    setNamesNbr(event.target.value);
  }

  return(
    <FormControl variant="filled" sx={{ m: 1, minWidth: 80}}>
      <InputLabel id="names-number-insert">Participants</InputLabel>
      <Select
        labelId="names-number-label"
        id="names-number-select"
        value={namesNumber}
        label="Number of names"
        onChange={handleChange}
      >
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={24}>24</MenuItem>
      </Select>
    </FormControl>
  )
}
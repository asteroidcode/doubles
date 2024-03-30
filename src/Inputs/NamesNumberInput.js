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

  return(null);
}
import React from 'react';
import Button from '@mui/material/Button';
import { versionType } from '../App';
import * as tables from '../Tables/tables.js';
import { cloneDeep } from 'lodash';
import { ConfirmDialog } from '../Dialogs/ConfirmDialog.js';
import { styled } from '@mui/material';
import { green, blue, orange } from '@mui/material/colors';

export const RandomizeTable = ({setTableVersion, setRandom12, setRandom16, setRandom20, setRandom24, setRandomiseAgain}) => {

  const randomizeTable = () => {
    setRandomiseAgain(true);
    setTableVersion(versionType.random);

    const newCopyTarr12 = cloneDeep(tables.tarr12);
    const newCopyTarr16 = cloneDeep(tables.tarr16);
    const newCopyTarr20 = cloneDeep(tables.tarr20);
    const newCopyTarr24 = cloneDeep(tables.tarr24);

    setRandom12(shuffle(newCopyTarr12));
    setRandom16(shuffle(newCopyTarr16));
    setRandom20(shuffle(newCopyTarr20));
    setRandom24(shuffle(newCopyTarr24));
  }

  const useDefaultTable = () => {
    setTableVersion(versionType.default);
  }

  const useOriginalTable = () => {
    setTableVersion(versionType.original);
  }

  // thanks for the shuffle example to Grant Riordan https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#ffffff", // theme.palette.getContrastText(green[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  }));

  const ColorButton2 = styled(Button)(({ theme }) => ({
    color: "#ffffff", // theme.palette.getContrastText(green[500]),
    backgroundColor: green[600],
    '&:hover': {
      backgroundColor: green[800],
    },
  }));

  const ColorButton3 = styled(Button)(({ theme }) => ({
    color: "#ffffff", // theme.palette.getContrastText(green[500]),
    backgroundColor: blue[400],
    '&:hover': {
      backgroundColor: blue[600],
    },
  }));

  return(
    <>
      <ConfirmDialog/>
      <p></p>
      {/*<ColorButton2 variant="contained" onClick={useDefaultTable} style={{marginTop: "40px"}}>Use default round order</ColorButton2>
      <ColorButton variant="contained" onClick={randomizeTable} color="secondary" style={{marginTop: "15px"}}>Randomise round order</ColorButton>
      <ColorButton3 variant="contained" onClick={useOriginalTable} color="primary" style={{marginTop: "15px"}}>Use boring round order</ColorButton3>
      */}
      <p></p>
    </>
  )
}
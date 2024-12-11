import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material';
import { purple, blue, green, orange, pink } from '@mui/material/colors';

export const ShuffleConfirmDialog = ({isOpen, close, randomizeOrder}) => {

  const handleCloseNo = () => {
    close();
  };

  const handleCloseYes = () => {
    randomizeOrder();
    close();
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));

  const YesButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  }));

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={handleCloseNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: orange[500]
          }
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Randomise the order of the names?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{color: "#ffffff"}} id="alert-dialog-description">
            Do you want to randomise the order of the names?<br/> 
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{margin: "auto", marginBottom:"10px"}}>
          <ColorButton variant="contained" color="warning" onClick={handleCloseNo} autoFocus>No</ColorButton>&nbsp;&nbsp;
          <YesButton variant="contained" color="warning" onClick={handleCloseYes}>
            Yes, randomise names
          </YesButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material';
import { orange, pink } from '@mui/material/colors';

export const InfoDialog = ({isOpen, close}) => {

  const handleClose = () => {
    close();
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));


  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: orange[700]
          }
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Information about the App"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{color: "#ffffff"}} id="alert-dialog-description">
            Tennis clubs sometimes organize events where people play short doubles matches, round after round.<br/><br/>

            This app sorts players into pairs and their opponents. The number of rounds can be changed. A player will have a different pair on each round. The opponents also change.<br/>
            <br/>
            If there is an uneven number of players (not divisible by 4), the app circulates the players who are sitting out for each round.<br/> 
            <br/>
            This hobby app was created with React.js and Material-UI

          </DialogContentText>
        </DialogContent>
        <DialogActions style={{margin: "auto", marginBottom:"10px"}}>
          <ColorButton variant="contained" color="warning" onClick={handleClose} autoFocus>OK, got it!</ColorButton>&nbsp;&nbsp;
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
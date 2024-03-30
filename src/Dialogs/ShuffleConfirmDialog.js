import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const ShuffleConfirmDialog = ({isOpen, close, randomizeOrder}) => {

  const handleCloseNo = () => {
    close();
  };

  const handleCloseYes = () => {
    randomizeOrder();
    close();
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={handleCloseNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Randomize names order?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to randomize the order of the names?<br/> 
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCloseNo} autoFocus>No</Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" onClick={handleCloseYes}>
            Yes, randomize
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
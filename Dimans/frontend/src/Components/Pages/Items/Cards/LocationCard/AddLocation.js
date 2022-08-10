import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import axios from "./../../../../../helpers/axios";

const AddLocationButton = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const token = localStorage.getItem('token');
  const auth = token;

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post(`/location/create`, { name }, {
      headers: {
        'Authorization': auth

      }
    }).then(function (response) {
      alert(response.data.message);
      setOpen(false);
    }).catch(function (error) {
      console.log(error);
    })
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <AddCircleRoundedIcon />
      </IconButton>
      <Dialog className="fe-card-bg" open={open} onClose={handleClose}>
        <DialogTitle>Add New Location</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="LocationName"
            label="Location Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddLocationButton;

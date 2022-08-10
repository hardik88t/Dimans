import SearchBar from '../../../../Utils/Search/index';
import UpgradeRoundedIcon from "@mui/icons-material/UpgradeRounded";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import axios from '../../../../../helpers/axios';
import DialogTitle from "@mui/material/DialogTitle";


import React from "react";

const UpdateLocationButton = () => {
  const [open, setOpen] = React.useState(false);
  const [oldname, setOldname] = React.useState("");
  const [newname, setNewname] = React.useState("");


  const updateLocation = (e) => {
    e.preventDefault();
    axios.post(`/location/updatelocation`, { oldname, newname },).then(function (response) {
      alert(response.data.message);
      setOpen(false);
    }).catch(function (error) {
      console.log(error);
    })
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <UpgradeRoundedIcon />
      </IconButton>
      <Dialog className="fe-card-bg" open={open} onClose={handleClose}>
        <DialogTitle>Update Location</DialogTitle>
        <DialogContent>

          <SearchBar search='Locations' />
          <TextField
            autoFocus
            margin="dense"
            id="LocationName"
            label="Location Old Name"
            type="text"
            fullWidth
            variant="standard"
            value={oldname}
            onChange={(e) => setOldname(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="LocationNewName"
            label="Location New Name"
            type="text"
            fullWidth
            variant="standard"
            value={newname}
            onChange={(e) => setNewname(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateLocation}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateLocationButton;

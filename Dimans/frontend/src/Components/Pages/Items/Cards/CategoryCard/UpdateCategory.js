import SearchBar from '../../../../Utils/Search/index';
import UpgradeRoundedIcon from "@mui/icons-material/UpgradeRounded";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import axios from '../../../../../helpers/axios';


const UpdateCategoryButton = () => {
  const [open, setOpen] = React.useState(false);

  //   const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const [oldname, setOldname] = React.useState("");
  const [newname, setNewname] = React.useState("");


  const updateCategory = (e) => {
    e.preventDefault();
    axios.post(`/category/updatecategory`, { oldname, newname },).then(function (response) {
      alert(response.data.message);
      setOpen(false);
    }).catch(function (error) {
      console.log(error);
    })
    setOpen(false);
  }
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
        <DialogTitle>Update Category</DialogTitle>
        <DialogContent>

          <SearchBar search='Categories' />
          <TextField
            autoFocus
            margin="dense"
            id="CategoryName"
            label="Category Old Name"
            type="text"
            fullWidth
            variant="standard"
            value={oldname}
            onChange={(e) => setOldname(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="CategoryNewName"
            label="Category New Name"
            type="text"
            fullWidth
            variant="standard"
            value={newname}
            onChange={(e) => setNewname(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateCategory}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateCategoryButton;

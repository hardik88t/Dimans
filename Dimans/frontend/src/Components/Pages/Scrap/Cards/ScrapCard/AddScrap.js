import './card.css';
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchBar from '../../../../Utils/Search/index';
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from '../../../../../helpers/axios';
import React from "react";

const AddItem = () => {
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState("");
  const [name, setName] = React.useState("");
  const [Rno, setRno] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const handleResult = P => {
    setProduct(P);
  };

  let qty = product.InitialQuantity;
  const token = localStorage.getItem('token');
  const auth = token;

  const DeleteItem = (e) => {
    e.preventDefault();
    axios.post(`/product/delete`, { name, Rno, amount }, {
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
        <AddCircleRoundedIcon />
      </IconButton>
      <Dialog className='fe-card-bg' open={open} onClose={handleClose}>
        <DialogTitle>Add Item to Scrap</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Add Item
          </DialogContentText> */}
          <SearchBar search="Items" handleResult={handleResult} />
          <TextField
            autoFocus
            margin="dense"
            id="ItemName"
            label="Item Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            margin="dense"
            id="ItemQuantity"
            label="No to add to scrap"
            type="number"
            fullWidth
            variant="standard"
            sx={{ mb: 3 }}
            inputProps={{ min: 0, max: qty, step: 1 }}
            value={Rno}
            onChange={(e) => setRno(e.target.value)}
          />
          <TextField
            margin="dense"
            id="ItemAmount"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            sx={{ mb: 3 }}

            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={DeleteItem}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddItem;

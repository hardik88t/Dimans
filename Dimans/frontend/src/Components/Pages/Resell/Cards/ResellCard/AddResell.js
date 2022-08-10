import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchBar from "../../../../Utils/Search/index";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
// import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React from "react";
import axios from "../../../../../helpers/axios";

const AddItem = () => {
  const [open, setOpen] = React.useState(false);
  const [dateadd, setDateAdd] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [name, setName] = React.useState("");
  const [Sno, setSno] = React.useState("");
  const [sprice, setSprice] = React.useState("");
  const [cusname, setCusame] = React.useState("");
  const [cusNo, setCusNo] = React.useState("");
  const [cusaddress, setCusaddress] = React.useState("");
  const [cusemail, setCusemail] = React.useState("");
  const handleResult = P => {
    setProduct(P);
  };

  let qty = product.InitialQuantity;
  const handleChangeDateAdd = (newValue) => {
    setDateAdd(newValue);
  };

  const token = localStorage.getItem('token');
  const auth = token;
  const addResell = (e) => {
    e.preventDefault();
    axios.post(`/resell/add`, { name, Sno, dateadd, sprice, cusNo, cusname, cusemail, cusaddress }, {
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
      <Dialog className="fe-card-bg" open={open} onClose={handleClose}>
        <DialogTitle>Add Item to Resell</DialogTitle>
        <DialogContent>

          <SearchBar search="Items" handleResult={handleResult} />

          <TextField
            margin="dense"
            required
            id="ItemName"
            label="Item Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ mb: 3 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />


          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date Added"
              required
              inputFormat="MM/DD/YYYY"
              value={dateadd}
              onChange={handleChangeDateAdd}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            margin="dense"
            id="ItemQuantity"
            label="No to add to scrap"
            type="number"
            fullWidth
            variant="standard"
            sx={{ mb: 3 }}
            inputProps={{ min: 0, max: qty, step: 1 }}
            value={Sno}
            onChange={(e) => setSno(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="ItemSellingPrice"
            label="Selling Price"
            type="number"
            fullWidth
            variant="standard"
            sx={{ mb: 3 }}
            value={sprice}
            onChange={(e) => setSprice(e.target.value)}
          />

          {/* <DialogContentText>Customer Details :</DialogContentText> */}
          <h3>Customer Details : </h3>

          <TextField
            autoFocus
            required
            margin="dense"
            id="CustomerName"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={cusname}
            onChange={(e) => setCusame(e.target.value)}
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="CustomerContact"
            label="Contact"
            type="tel"
            fullWidth
            variant="standard"
            value={cusNo}
            onChange={(e) => setCusNo(e.target.value)}
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="CustomerEmail"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={cusemail}
            onChange={(e) => setCusemail(e.target.value)}
          />

          <TextField
            margin="dense"
            required
            id="CustomerAddress"
            label="Address"
            multiline
            type="text"
            fullWidth
            rows={5}
            variant="outlined"
            value={cusaddress}
            onChange={(e) => setCusaddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addResell}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddItem;

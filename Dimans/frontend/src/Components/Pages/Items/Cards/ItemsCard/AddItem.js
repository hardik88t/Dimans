import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Form } from 'react-bootstrap';
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import axios from "../../../../../helpers/axios";


import React, { useEffect } from "react";


const AddItemButton = () => {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [vendor, setVendor] = React.useState("");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [Categories, setCategories] = React.useState("");
  const [Locations, setLocations] = React.useState("");
  const [Vendors, setVendors] = React.useState("");





  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeVendor = (event) => {
    setVendor(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    const getCategories = async () => {

      const res = await axios.get(`/category/getcategory`);
      setCategories(res.data.categories);

    };
    const getLocations = async () => {

      const res = await axios.get(`/location/getlocation`);
      setLocations(res.data.locations);

    };
    const getVendors = async () => {

      const res = await axios.get(`/distributor/getdistributor`);
      setVendors(res.data.vendors);

    };
    getCategories();
    getLocations();
    getVendors();
  }, [Categories, Locations, Vendors])




  const token = localStorage.getItem('token');
  const auth = token;

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post(`/product/create`, { name, price, quantity, vendor, location, category }, {
      headers: {
        'Authorization': auth

      }
    }).then(function (response) {
      alert(response.data.message)
      setOpen(false);
    }).catch(function (error) {
      console.log(error);
    })
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // Array.isArray(Categories)?console.log("yes"):console.log("no");
  //  const options = Categories.data.categories;
  //  console.log(options);

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <AddCircleRoundedIcon />
      </IconButton>

      <Dialog className="fe-card-bg" open={open} onClose={handleClose}>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>

          <Form>
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
              id="ItemPrice"
              label="Item Price"
              type="number"
              fullWidth
              variant="standard"
              sx={{ mb: 3 }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              margin="dense"
              id="ItemQuantity"
              label="Item Quantity"
              type="number"
              fullWidth
              variant="standard"
              sx={{ mb: 3 }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <InputLabel id="item-category">Category</InputLabel>


            <Select
              labelId="item-category"
              id="item-category"
              value={category}
              onChange={handleChangeCategory}
              label="Category"
              fullWidth
              variant="standard"
              sx={{ mb: 3 }}
            >
              <MenuItem></MenuItem>
              {Categories && Categories.map(option => <MenuItem value={option._id} key={option._id}>{option.name}</MenuItem>)}


            </Select>

            <InputLabel id="item-location" sx={{ mt: 3 }}>Location</InputLabel>
            <Select
              labelId="item-location"
              id="item-location"
              value={location}
              onChange={handleChangeLocation}
              label="Location"
              fullWidth
              variant="standard"
              sx={{ mb: 3 }}
            >
              {Locations && Locations.map(option => <MenuItem value={option._id} key={option._id}>{option.name}</MenuItem>)}

            </Select>
            <InputLabel id="item-vendor">Vendor</InputLabel>
            <Select
              labelId="item-vendor"
              id="item-vendor"
              value={vendor}
              onChange={handleChangeVendor}
              label="Vendor"
              fullWidth
              variant="standard"
              sx={{ mb: 3 }}
            >
              {Vendors && Vendors.map(option => <MenuItem value={option._id} key={option._id}>{option.name}</MenuItem>)}

            </Select>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddItemButton;

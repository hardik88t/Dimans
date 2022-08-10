import SearchBar from '../../../../Utils/Search/index';
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect } from "react";
import axios from '../../../../../helpers/axios';


const ShowVendorButton = () => {
  const [open, setOpen] = React.useState(false);
  const [Vendors, setVendors] = React.useState("");

  useEffect(() => {
    const getVendors = async () => {

      const res = await axios.get(`/distributor/getdistributor`);
      setVendors(res.data.vendors);

    };
    getVendors();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <DeleteForeverRoundedIcon />
      </IconButton>
      <Dialog className="fe-card-bg" open={open} onClose={handleClose}>
        <DialogTitle>Show Distributor</DialogTitle>
        <DialogContent>
          <div style={{ padding: 3 }}>
            {Vendors && Vendors.map((d) => (
              <div
                className="text"
                style={{
                  padding: 5,
                  justifyContent: "normal",
                  fontSize: 20,
                  color: "blue",
                  margin: 1,
                  width: "250px",
                  BorderColor: "green",
                  borderWidth: "10px"
                }}

                key={d._id}
              >
                <div>{d.name}</div>
                <div>{d.email}</div>
                <div>{d.contactNumber}</div>
                <div>{d.address}</div>
              </div>
            ))}
          </div>
        </DialogContent>

      </Dialog>
    </div>
  );
};

export default ShowVendorButton;

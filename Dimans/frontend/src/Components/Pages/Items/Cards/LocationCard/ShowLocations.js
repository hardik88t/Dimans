import SearchBar from '../../../../Utils/Search/index';
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import axios from '../../../../../helpers/axios';
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { useEffect } from 'react';

const ShowLocationButton = () => {
  const [open, setOpen] = React.useState(false);
  const [Locations, setLocations] = React.useState("");

  useEffect(() => {
    const getLocations = async () => {

      const res = await axios.get(`/location/getlocation`);
      setLocations(res.data.locations);

    };
    getLocations();
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
        <DialogTitle>Show Locations</DialogTitle>
        <DialogContent>
          <div style={{ padding: 3 }}>
            {Locations && Locations.map((d) => (
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
                {d.name}
              </div>
            ))}
          </div>
        </DialogContent>

      </Dialog>
    </div>
  );
};

export default ShowLocationButton;

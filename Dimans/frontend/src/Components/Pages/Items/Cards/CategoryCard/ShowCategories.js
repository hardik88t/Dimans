import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect } from "react";
import axios from '../../../../../helpers/axios';

const ShowCategoryButton = () => {
  const [open, setOpen] = React.useState(false);
  const [Categories, setCategories] = React.useState("");

  useEffect(() => {
    const getCategories = async () => {

      const res = await axios.get(`/category/getcategory`);
      setCategories(res.data.categories);

    };
    getCategories();
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
        <DialogTitle>Categories</DialogTitle>
        <DialogContent>
          <div style={{ padding: 3 }}>
            {Categories && Categories.map((d) => (
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

export default ShowCategoryButton;

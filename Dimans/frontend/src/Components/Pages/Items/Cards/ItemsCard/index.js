import "./card.css";
import AddItemButton from './AddItem';
import UpdateItemButton from './UpdateItem';
import DeleteItemButton from './DeleteItem';

import IconButton from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Index = () => {
  return (
    <div className="fe-items-card">
      <div className="fe-items-card-new">
        <Stack direction="row" alignItems="center" spacing={10.5}>
          <p>Add Item</p>
          <IconButton>
            <AddItemButton />
          </IconButton>
        </Stack>
      </div>
      <div className="fe-items-card-update">
        <Stack direction="row" alignItems="center" spacing={7}>
          <p>Update Item</p>
          <IconButton>
            <UpdateItemButton />
          </IconButton>
        </Stack>
      </div>
      <div className="fe-items-card-delete">
        <Stack direction="row" alignItems="center" spacing={8}>
          <p>Delete Item</p>
          <IconButton aria-label="delete">
            <DeleteItemButton />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
};

export default Index;

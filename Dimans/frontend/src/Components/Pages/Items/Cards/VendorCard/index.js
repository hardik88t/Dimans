import "./card.css";
import AddVendorButton from './AddVendor';
import UpdateVendorButton from './UpdateVendor';
import ShowVendorButton from './ShowVendors';
// import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
// import UpgradeRoundedIcon from "@mui/icons-material/UpgradeRounded";
// import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import IconButton from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Index = () => {
  return (
    <div className="fe-vendor-card">
      <div className="fe-vendor-card-new">
        <Stack direction="row" alignItems="center" spacing={12.5}>
          <p>Add Vendor</p>
          <IconButton>
            <AddVendorButton />
          </IconButton>
        </Stack>
      </div>
      <div className="fe-vendor-card-update">
        <Stack direction="row" alignItems="center" spacing={9}>
          <p>Update Vendor</p>
          <IconButton>
            <UpdateVendorButton />
          </IconButton>
        </Stack>
      </div>
      <div className="fe-vendor-card-delete">
        <Stack direction="row" alignItems="center" spacing={8}>
          <p>Show Vendors</p>
          <IconButton aria-label="delete">
            <ShowVendorButton />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
};

export default Index;

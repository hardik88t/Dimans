import "./card.css";
import AddLocationButton from './AddLocation';
import UpdateLocationButton from './UpdateLocation';
import ShowLocationButton from './ShowLocations';
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

const Index = () => {
  return (
    <div className="fe-location-card">
      <div className="fe-location-card-new">
        <Stack direction="row" alignItems="center" spacing={11.5}>
          <p>Add Location</p>
          <IconButton>
            <AddLocationButton />
          </IconButton>
        </Stack>
      </div>
      <div className="fe-location-card-update">
        <Stack direction="row" alignItems="center" spacing={8}>
          <p>Update Location</p>
          <IconButton>
            <UpdateLocationButton />
          </IconButton>
        </Stack>
      </div>
      <div className="fe-location-card-delete">
        <Stack direction="row" alignItems="center" spacing={7}>
          <p>Show Locations</p>
          <IconButton aria-label="delete">
            <ShowLocationButton />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
};

export default Index;
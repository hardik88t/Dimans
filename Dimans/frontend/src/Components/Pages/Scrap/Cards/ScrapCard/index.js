import "./card.css";
import AddScrapButton from './AddScrap';
import IconButton from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Index = () => {
  return (
    <div className="fe-scrap-card">
      <div className="fe-scrap-card-new">
        <Stack direction="row" alignItems="center" spacing={17}>
          <p>Add Item to Scrap</p>
          <IconButton>
            <AddScrapButton />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
};

export default Index;

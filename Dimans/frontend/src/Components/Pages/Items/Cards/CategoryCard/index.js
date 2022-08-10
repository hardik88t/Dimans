import "./card.css";
import AddCategoryButton from './AddCategory';
import UpdateCategoryButton from './UpdateCategory';
import ShowCategoryButton from './ShowCategories';
import IconButton from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Index = () => {
  return (
    <div className="fe-category-card">
      <div className="fe-category-card-new">
        <Stack direction="row" alignItems="center" spacing={10.5}>
          <p>Add Category</p>
          <IconButton>
            <AddCategoryButton />
          </IconButton>
        </Stack>
      </div>
      <div className="fe-category-card-update">
        <Stack direction="row" alignItems="center" spacing={7}>
          <p>Update Category</p>
          <IconButton>
            <UpdateCategoryButton />
          </IconButton>
        </Stack>
      </div>
      <div className="fe-category-card-delete">
        <Stack direction="row" alignItems="center" spacing={8}>
          <p>Show Categories</p>
          <IconButton aria-label="delete">
            <ShowCategoryButton />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
};

export default Index;
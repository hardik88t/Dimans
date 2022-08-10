import "./ScrapTable.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "../../../helpers/axios";

const columns = [
  { field: "id",
   headerName: "Item ID",
    width: 200,
     editable: false,
     headerClassName: "super-app-theme--header"
 },
  {
    field: "itemName",
    headerName: "Item Name",
    width: 200,
    editable: false,
    headerClassName: "super-app-theme--header"
  },
  
  {
    field: "scrapAmount",
    headerName: "Amount Recieved",
    width: 170,
    type: "number",
    // editable: true,
    editable: false,
    headerClassName: "super-app-theme--header"
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
];



export default function ScrapTable(props) {
 
  const rows = [];
  const rows1 = [];
  const rows2 = [];
  const [Items, setItems] = useState("");
  const [Result, setResult] = useState("");
  var data;
  useEffect(() => {
    const getItems = async() => {

      const res = await axios.get(`/scrap/getremovedproductList`);

      setItems(res.data.removedList);

    };
    getItems();
   
 
  },[Items]);
  let n = Items.length;
  let i = 0;
  for (i; i < n; i++) {
    rows.push({
      id: Items[i].itemid,
      itemName: Items[i].name,
      dateAdded: Items[i].dateadded,
      scrapAmount:Items[i].amount,
      quantity:Items[i].quantity
      

    })
  }
  if (props.type === "Pro") {
    let name = props.pname;
    const getResult = async () => {
      
      await axios.post(`/scrap/getremovedproductListByName`, { name }).then(function (res) {
       
        
        setResult(res.data.removedList);
       
  
      }).catch(function (error) {
        console.log(error);
      })
    }
    
      getResult();
      // console.log(Result);
      
    let l = Result.length;
   
      i = 0;
      for (i; i < l; i++) {
        rows2.push({
          id: Result[i].itemid,
          itemName: Result[i].name,
          dateAdded: Result[i].dateadded,
          scrapAmount:Result[i].amount,
          quantity:Result[i].quantity
        })
      }
  }
  switch (props.type) {
    case "full":
      data = rows;
      break;
    case "recent":
      data = rows1;
      break;
    case 'Pro':
      data = rows2;
      break;
    default:
      data = rows;
      break;
  }

  return (
    <div className="fe-scrap-table">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          // autoHeight
          rowsPerPageOptions={[5]}
          // checkboxSelection
          disableSelectionOnClick
          sx={{
            border: 2,
            borderColor: "#673AB7",
            borderRadius: 1,
            "& .MuiDataGrid-cell:hover": {
              color: "black",
              // backgroundColor:'primary.light',
            },
            "& .MuiDataGrid-cell": {
              color: "white",
              // backgroundColor:'primary.light',
            },
            "& .super-app-theme--header": {
              backgroundColor: "#673AB7",
              color: "white",
              fontWeight: "bold",
            },
            
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}

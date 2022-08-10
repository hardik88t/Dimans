import "./ResellTable.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "../../../helpers/axios";

const columns = [
  {
    field: "id",
    headerName: "Item ID",
    width: 150,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "itemName",
    headerName: "Item Name",
    width: 170,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "datereselled",
    headerName: "Date Reselled",
    width: 170,
    type: "date",
    // editable: true,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "sellinPrice",
    headerName: "Selling Price",
    type: "number",
    width: 170,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "customer",
    headerName: "Customer Name",
    width: 170,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
];


export default function ResellTable(props) {
  const rows = [];
  const rows2 = [];
  const [Items, setItems] = useState("");
  const [Result, setResult] = useState("");
  var data;
  useEffect(() => {
    const getItems = async() => {

      const res = await axios.get(`/resell/getreselledproductList`);

      setItems(res.data.reselledList);

    };
    getItems();
   
  },[Items]);
  let n = Items.length;
  let i = 0;
  for (i; i < n; i++) {
    rows.push({
      id: Items[i].itemid,
      itemName: Items[i].name,
      quantity:Items[i].qty,
      datereselled: Items[i].dateReselled,
      sellinPrice:Items[i].price,
      customer:Items[i].customer
      
      

    })
  }
  if (props.type === "Pro") {
    let name = props.pname;
    const getResult = async () => {
      
      await axios.post(`/resell/getreselledproductListByName`, { name }).then(function (res) {
       
        
        setResult(res.data.reselledList);
       
  
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
      quantity:Result[i].qty,
      datereselled: Result[i].dateReselled,
      sellinPrice:Result[i].price,
      customer:Result[i].customer
      
      
        })
      }
  }
  switch (props.type) {
    case "full":
      data = rows;
      break;
    case 'Pro':
      data = rows2;
      break;
    default:
      data = rows;
      break;
  }
  return (
    <div className="fe-resell-table">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
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

import './ItemsTable.css';
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from './../../../helpers/axios';
import { useEffect, useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 230, headerClassName: 'super-app-theme--header' },
  {
    field: "name",
    headerName: "Name",
    width: 170,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "price",
    headerName: "Price",

    headerAlign: 'start',
    width: 110,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    width: 140,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "dateAdded",
    headerName: "Date Registered",
    // description: "This column has a value getter and is not sortable.",
    type: 'date',
    sortable: true,
    editable: false,
    width: 170,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "location",
    headerName: "Location",
    editable: false,
    // description: "This column has a value getter and is not sortable.",
    // type:"date",
    // sortable: false,
    width: 140,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "vendor",
    headerName: "Vendor",
    editable: false,
    // description: "This column has a value getter and is not sortable.",
    // type:"date",
    sortable: false,
    width: 170,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "removedquantity",
    headerName: "Removed Quantity",
    width: 100,
    editable: false,
    headerClassName: 'super-app-theme--header',
  }, {
    field: "resellquantity",
    headerName: "Resell",
    width: 100,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
];

const Index = (props) => {
  const rows0 = [];
  const rows1 = [];
  const rows2 = [];
  const [Products, setProducts] = useState("");
  const [Result, setResult] = useState("");
  const [Recentproducts, setRecentproducts] = useState("");
  useEffect(() => {
    const getProducts = async () => {

      const res = await axios.get(`/product/getproductlist`);

      setProducts(res.data.productList);

    };
    const getrecentProducts = async () => {

      const res = await axios.get(`/product/getrecentproductlist`);

      setRecentproducts(res.data.productList);

    };
    getProducts();
    getrecentProducts();


  }, [Products, Recentproducts]);

  let n = Products.length;
  let i = 0;
  for (i; i < n; i++) {
    rows1.push({
      id: Products[i]._id,
      name: Products[i].name,
      price: Products[i].price,
      quantity: Products[i].quantity,
      category: Products[i].category,
      dateAdded: Products[i].date,
      location: Products[i].location,
      vendor: Products[i].vendor,
      removedquantity: Products[i].removedNo,
      resellquantity: Products[i].resellNo,

    })
  }
  n = Recentproducts.length;
  i = 0;
  for (i; i < n; i++) {
    rows2.push({
      id: Products[i]._id,
      name: Products[i].name,
      price: Products[i].price,
      quantity: Products[i].quantity,
      category: Products[i].category,
      dateAdded: Products[i].date,
      location: Products[i].location,
      vendor: Products[i].vendor,
      removedquantity: Products[i].removedNo,
      resellquantity: Products[i].resellNo,

    })
  }
  // console.log(rows1);
  if (props.type === "Pro") {
    let name = props.pname;
    const getResult = async () => {

      await axios.post(`/product/getproductlistbyname`, { name }).then(function (res) {

        setResult(res.data.productList);


      }).catch(function (error) {
        console.log(error);
      })
    }

    getResult();
    let l = Result.length;
    let k = 0;
    for (k; k < l; k++) {
      rows0.push({
        id: Result[k]._id,
        name: Result[k].name,
        price: Result[k].price,
        quantity: Result[k].quantity,
        category: Result[k].category,
        dateAdded: Result[k].date,
        location: Result[k].location,
        vendor: Result[k].vendor,
        removedquantity: Result[k].removedNo,
        resellquantity: Result[k].resellNo,

      })
    }
  }

  var data;
  switch (props.type) {
    case 'full':
      data = rows1;
      break;
    case 'Pro':
      data = rows0;
      break;
    case 'recent':
      data = rows2
      break;
    default:
      data = rows1;
  }

  return (
    <div className="fe-items-table">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // ,
          // autoHeight
          // checkboxSelection
          disableSelectionOnClick
          sx={{
            border: 2,
            borderColor: '#673AB7',
            borderRadius: 1,
            '& .MuiDataGrid-cell:hover': {
              color: 'black',
              // backgroundColor:'primary.light',
            },
            '& .MuiDataGrid-cell': {
              color: 'white',
              // backgroundColor:'primary.light',
            },
            '& .super-app-theme--header': {
              backgroundColor: '#673AB7',
              color: 'white',
              fontWeight: 'bold'
            }
          }}
          experimentalFeatures={{ newEditingApi: true }}
        // density="comfortable"
        />
      </Box>
    </div>
  );
};

export default Index;

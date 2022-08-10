import { useEffect, useState } from "react";
import './search.css';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "../../../helpers/axios";


export default function Index({ search, handleResult }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState("");
  const [Products, setProducts] = useState("");
  const [Removedproducts, setRemovedproducts] = useState("");
  const [Categories, setCategories] = useState("");
  const [Locations, setLocations] = useState("");
  const [Vendors, setVendors] = useState("");
  const [Agencies, setAgencies] = useState("");
  const [Reselledproducts, setReselledproducts] = useState("");
  // console.log(props.search);


  useEffect(() => {
    const getProducts = async () => {

      const res = await axios.get(`/product/getproducts`);
      // console.log(res);
      setProducts(res.data.products);

    };
    const getremovedProducts = async () => {

      const res = await axios.get(`/scrap/getremovedproducts`);
      // console.log(res);
      setRemovedproducts(res.data.removedproducts);

    };
    const getreselledProducts = async () => {

      const res = await axios.get(`/resell/getreselledproducts`);
      // console.log(res);
      setReselledproducts(res.data.reselledproducts);

    };
    const getCategories = async () => {

      const res = await axios.get(`/category/getcategory`);
      setCategories(res.data.categories);

    };
    const getLocations = async () => {

      const res = await axios.get(`/location/getlocation`);
      setLocations(res.data.locations);

    };
    const getVendors = async () => {

      const res = await axios.get(`/vendor/getvendor`);
      setVendors(res.data.vendors);

    };
    const getAgencis = async () => {

      const res = await axios.get(`/agency/getagency`);
      setAgencies(res.data.agencies);

    };
    getCategories();
    getLocations();
    getVendors();
    getProducts();
    getAgencis();
    getremovedProducts();
    getreselledProducts();
  }, [Agencies, Vendors, Locations, Categories, result, Removedproducts, Products, Reselledproducts])
  let data = [];

  if (search === "Items") {
    let i = 0;
    let n = Products.length;

    for (i = 0; i < n; i++) {
      data.push(Products[i].name);
    }

  }
  if (search === "resell") {
    let i = 0;
    let n = Reselledproducts.length;

    for (i = 0; i < n; i++) {
      data.push(Reselledproducts[i].name);
    }

  }
  if (search === "scrap") {
    let i = 0;
    let n = Removedproducts.length;

    for (i = 0; i < n; i++) {
      data.push(Removedproducts[i].name);
    }
  }
  if (search === "Agency") {
    let i = 0;
    let n = Agencies.length;

    for (i = 0; i < n; i++) {
      data.push(Agencies[i].name);
    }
  }

  if (search === "Categories") {
    let i = 0;
    let n = Categories.length;

    for (i = 0; i < n; i++) {
      data.push(Categories[i].name);
    }
  }
  if (search === "Locations") {
    let i = 0;
    let n = Locations.length;

    for (i = 0; i < n; i++) {
      data.push(Locations[i].name);
    }
  }
  if (search === "Vendors") {
    let i = 0;
    let n = Vendors.length;

    for (i = 0; i < n; i++) {
      data.push(Vendors[i].name);
    }
  }
  if (search === "CategoriesItems") {
    let i = 0;
    let n = Categories.length;

    for (i = 0; i < n; i++) {
      data.push(Categories[i].name);

    }
    i = 0;
    n = Products.length;

    for (i = 0; i < n; i++) {
      data.push(Products[i].name);
    }
  }

  // console.log(data);
  const data1 = [];
  const filterData = (query, data) => {
    if (!query) {
      return data1;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }

  };
  const dataFiltered = filterData(searchQuery, data);
  const getProductData = (e) => {
    e.preventDefault();
    let name = searchQuery;
    axios.post(`/product/getproductbyname`, { name }).then(function (response) {
      const { product } = response.data;
      setResult(product);
      // console.log("abc",result);
      handleResult(result);
      localStorage.setItem('searchedproduct', JSON.stringify(product));

    }).catch(function (error) {
      console.log(error);
    })


  }


  return (
    <div className="fe-utils-search">

      <form >
        <TextField
          id="search-bar"
          className="search-textfield"
          onInput={(e) => {
            setSearchQuery(e.target.value);

          }}

          label="Search item"
          variant="outlined"
          placeholder="Search..."
          size="small"
          value={searchQuery}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="search" onClick={getProductData}>
                  <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        > </TextField>
        <div style={{ padding: 3 }}>
          {dataFiltered.map((d) => (
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
              onClick={(e) => {
                setSearchQuery(d);
              }}
              key={d.id}
            >
              {d}
            </div>
          ))}
        </div>
      </form>


    </div>

  );
};


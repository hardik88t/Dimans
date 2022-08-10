import "./widget.css";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import axios from "../../../helpers/axios";



const Index = (props) => {
  var data = {};
  const [Registered, setRegistered] = useState("");
  const [Available, setAvailable] = useState("");
  const [Category, setCategory] = useState("");
  const [ItemsExpense, setItemsExpense] = useState("");
  const [ScrapNo, setScrapNo] = useState("");
  const [ScrapRevenue, setScrapRevenue] = useState("");
  const [ResellNo, setResellNo] = useState("");
  const [ResellRevenue, setResellRevenue] = useState("");



  useEffect(() => {
    const getTotalProducts = async () => {

      const res = await axios.get(`/product/getTotalItems`);
      setAvailable(res.data.totalAvailable);
      setRegistered(res.data.totalRegistred);
      setItemsExpense(res.data.itemsExpense);


    };
    const getTotalCategories = async () => {

      const res = await axios.get(`/category/getTotalcategories`);
      setCategory(res.data.totalCategories);

    };
    const getTotalScrap = async () => {

      const res = await axios.get(`/scrap/getTotalScrap`);
      setScrapNo(res.data.totalScrapNo);
      setScrapRevenue(res.data.totalScrapRevenue)

    };
    const getTotalResell = async () => {

      const res = await axios.get(`/resell/getTotalResell`);
      setResellNo(res.data.totalResellNo);
      setResellRevenue(res.data.totalResellRevenue)

    };
    getTotalResell();
    getTotalProducts();
    getTotalCategories();
    getTotalScrap();
  }, [])
  let TotalRevenue = ResellRevenue + ScrapRevenue;
  switch (props.type) {
    case "items":
      data = {
        title1: "Total Items Registered",
        data1: Registered,
        title2: "Total Categories Created",
        data2: Category,
      };
      break;
    case "scrap resell":
      data = {
        title1: "Total Scrap Items",
        data1: ScrapNo,
        title2: "Total Items Reselled",
        data2: ResellNo,
      };
      break;
    // case "cost summary":
    //   data = {
    //     title1: "Total Expense",
    //     data1: TotalExpense,
    //     title2: "Total Revenue",
    //     data2: TotalRevenue,
    //   };
    //   break;
  }
  return (
    <div className="fe-widget">
      <div className="fe-widget-data">
        {/* <div className="fe-widget-data"> */}
        <Stack direction="row" alignItems="center" spacing={4}>
          <p>{data.title1}</p>
          <p>{data.data1}</p>
        </Stack>
        <br></br>
        {/* </div> */}
        {/* <div className="fe-widget-data"> */}
        <Stack direction="row" alignItems="center" spacing={4}>
          <p>{data.title2}</p>
          <p>{data.data2}</p>
        </Stack>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Index;

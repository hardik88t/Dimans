import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "../../../../../helpers/axios";


export const options = {
  title: "Finance Summary",
  pieHole: 0.3,
  is3D: false,
  colors: ['#C62828', '#1565C0'],
  backgroundColor: 'transparent',
  fontName: 'sans-serif',
  fontSize: 16,
  chartArea: { height: '100%', width: '100%', left: '20%', top: "10%" },
  height: '70%',
  width: "70%"
  //   legend:{position: 'bottom', textStyle: {color: 'blue', fontSize: 16}}

};

export default function App() {
  const [Registered, setRegistered] = useState("");
  const [Available, setAvailable] = useState("");
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

    // getMaintenanceNo();
    getTotalScrap();
  }, [])
  let TotalRevenue = ResellRevenue + ScrapRevenue;
  const data = [
    ["Transactions", "Amount"],
    ["Revenue", TotalRevenue],
    // ["Expense", TotalExpense],
  ];
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}

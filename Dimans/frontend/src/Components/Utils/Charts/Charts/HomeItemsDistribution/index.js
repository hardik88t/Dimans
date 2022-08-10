import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "../../../../../helpers/axios";



export const options = {
  title: "Items Distribution",
  pieHole: 0.3,
  is3D: false,
  colors: ['#1565C0', '#C62828', '#FFC107'],
  backgroundColor: 'transparent',
  fontName: 'sans-serif',
  fontSize: 16,
  chartArea: { height: '100%', width: '100%', left: '20%', top: "10%" },
  height: '70%',
  width: "70%"
  //   legend:{position: 'bottom', textStyle: {color: 'blue', fontSize: 16}}

};

export default function App() {


  const [ScrapNo, setScrapNo] = useState("");

  const [ResellNo, setResellNo] = useState("");




  useEffect(() => {

    const getTotalScrap = async () => {

      const res = await axios.get(`/scrap/getTotalScrap`);
      setScrapNo(res.data.totalScrapNo);

    };
    const getTotalResell = async () => {

      const res = await axios.get(`/resell/getTotalResell`);
      setResellNo(res.data.totalResellNo);

    };
    getTotalResell();

    getTotalScrap();
  }, [ResellNo, ScrapNo])
  const data = [
    ["Items", "Count"],
    ["Scrap", ScrapNo],
    ["Resell", ResellNo],
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

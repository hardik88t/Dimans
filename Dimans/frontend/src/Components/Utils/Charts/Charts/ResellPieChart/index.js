import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "../../../../../helpers/axios";



export const options = {
  title: "Resell Items Status Distribution",
  pieHole: 0.3,
  is3D: false,
  colors:['#FFC107','#1565C0','#C62828'],
  backgroundColor:'transparent',
  fontName:'sans-serif',
  fontSize:16,
  chartArea:{height:'100%',width:'100%',left:'20%',top:"10%"},
  height:'90%',
  width:"90%"
//   legend:{position: 'bottom', textStyle: {color: 'blue', fontSize: 16}}
  
};

export default function App() {
  
  const [ScrapRevenue, setScrapRevenue] = useState("");
 
  const [ResellRevenue, setResellRevenue] = useState("");
 


  useEffect(() => {
    
    const getTotalScrap = async () => {

      const res = await axios.get(`/scrap/getTotalScrap`);
      
      setScrapRevenue(res.data.totalScrapRevenue)
 
    };
    const getTotalResell = async () => {

      const res = await axios.get(`/resell/getTotalResell`);
     
      setResellRevenue(res.data.totalResellRevenue)
 
    };
    getTotalResell();
   
    getTotalScrap();
  },[])
  const data = [
    ["Status", "Count"],
    ["Scrap Revenue", ScrapRevenue],
    ["Resell Revenue", ResellRevenue],
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

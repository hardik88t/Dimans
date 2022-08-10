import React, { useEffect, useState } from "react";
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


// const dataOld = [
//   ["Category", "Qty in Scrap"],
//   ["Monitor", 279],
//   ["CPU", 201],
//   ["Mouse", 389],
// ];

// const dataNew = [
//     ["Category", "Qty in Scrap"],
//     ["Monitor", 190],
//     ["CPU", 187],
//     ["Mouse", 290],
// ];

// export const diffdata = {
//   old: dataOld,
//   new: dataNew,
// };

// export const options = {
//   title:"Scrap Items by Category",
//   pieSliceText: "none",
//   backgroundColor:'transparent',
//   fontName:'sans-serif',
//   fontSize:16,
//   chartArea:{height:'100%',width:'100%',left:'10%'},
//   colors:['#C62828','#00C853','#1565C0','#7B5BDB','#FFC107'],
//   height:'100%',
//   width:"100%"
// };

// export default function App() {
//   return (
//     <Chart
//       chartType="PieChart"
//       width="100%"
//       height="100%"
//       diffdata={diffdata}
//       options={options}
//     />
//   );
// }

import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "../../../../../helpers/axios";





export const options = {
  chart: {
    title: "Yearly Report",
    subtitle: "Revenue Generated by Resell and Scrap",
  },
  backgroundColor:'transparent',
  fontSize:"14px",
//   legend: {position: 'in'},
  colors:['#C62828','#1565C0']
};

export default function App() {
  const [JanResellRevenue, setJanResellRevenue] = useState("");
  const [FebResellRevenue, setFebResellRevenue] = useState("");
  const [MarResellRevenue, setMarResellRevenue] = useState("");
  const [AprResellRevenue, setAprResellRevenue] = useState("");
  const [MayResellRevenue, setMayResellRevenue] = useState("");
  const [JunResellRevenue, setJunResellRevenue] = useState("");
  const [JulResellRevenue, setJulResellRevenue] = useState("");
  const [AugResellRevenue, setAugResellRevenue] = useState("");
  const [SepResellRevenue, setSepResellRevenue] = useState("");
  const [OctResellRevenue, setOctResellRevenue] = useState("");
  const [NovResellRevenue, setNovResellRevenue] = useState("");
  const [DecResellRevenue, setDecResellRevenue] = useState("");


  const [JanScrapRevenue, setJanScrapRevenue] = useState("");
  const [FebScrapRevenue, setFebScrapRevenue] = useState("");
  const [MarScrapRevenue, setMarScrapRevenue] = useState("");
  const [AprScrapRevenue, setAprScrapRevenue] = useState("");
  const [MayScrapRevenue, setMayScrapRevenue] = useState("");
  const [JunScrapRevenue, setJunScrapRevenue] = useState("");
  const [JulScrapRevenue, setJulScrapRevenue] = useState("");
  const [AugScrapRevenue, setAugScrapRevenue] = useState("");
  const [SepScrapRevenue, setSepScrapRevenue] = useState("");
  const [OctScrapRevenue, setOctScrapRevenue] = useState("");
  const [NovScrapRevenue, setNovScrapRevenue] = useState("");
  const [DecScrapRevenue, setDecScrapRevenue] = useState("");

  useEffect(() => {
    const getScrapRevenue = async () => {

      const res = await axios.get(`/scrap/getMonthsscrap`);
      setDecScrapRevenue(res.data.DecScrapRevenue);
      setNovScrapRevenue(res.data.NovScrapRevenue);
      setOctScrapRevenue(res.data.OctScrapRevenue);
      setSepScrapRevenue(res.data.SepScrapRevenue);
      setAugScrapRevenue(res.data.AugScrapRevenue);
     
      setJulScrapRevenue(res.data.JulScrapRevenue);
      setJunScrapRevenue(res.data.JunScrapRevenue);
      setMayScrapRevenue(res.data.MayScrapRevenue);
      setAprScrapRevenue(res.data.AprScrapRevenue);
      setMarScrapRevenue(res.data.MarScrapRevenue);
      setFebScrapRevenue(res.data.FebScrapRevenue);
      setJanScrapRevenue(res.data.JanScrapRevenue);
    
 
    };
    const getResellRevenue = async () => {

      const res = await axios.get(`/resell/getMonthsResell`);
      
      setDecResellRevenue(res.data.DecResellRevenue);
      setNovResellRevenue(res.data.NovResellRevenue);
      setOctResellRevenue(res.data.OctResellRevenue);
      setSepResellRevenue(res.data.SepResellRevenue);
      setAugResellRevenue(res.data.AugResellRevenue);
     
      setJulResellRevenue(res.data.JulResellRevenue);
      setJunResellRevenue(res.data.JunResellRevenue);
      setMayResellRevenue(res.data.MayResellRevenue);
      setAprResellRevenue(res.data.AprResellRevenue);
      setMarResellRevenue(res.data.MarResellRevenue);
      setFebResellRevenue(res.data.FebResellRevenue);
      setJanResellRevenue(res.data.JanResellRevenue);
    
 
    };
    getResellRevenue();
    getScrapRevenue();
  },[])
  const data = [
    ["Month", "Scrap", "Resell"],
    ["January",JanScrapRevenue,JanResellRevenue],
    ["February",FebScrapRevenue,FebResellRevenue],
    ["March",MarScrapRevenue,MarResellRevenue],
    ["April",AprScrapRevenue,AprResellRevenue],
    ["May",MayScrapRevenue,MayResellRevenue],
    ["June",JunScrapRevenue,JunResellRevenue],
    ["July",JulScrapRevenue,JulResellRevenue],
    ["August",AugScrapRevenue,AugResellRevenue],
    ["September",SepScrapRevenue,SepResellRevenue],
    ["October",OctScrapRevenue,OctResellRevenue],
    ["November",NovScrapRevenue,NovResellRevenue],
    ["December",DecScrapRevenue,DecResellRevenue]
  ];
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}

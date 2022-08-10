// import '../../Styles/home.css';
import Header from './Header/index';
import SideBar from './SideBar/index';
import "./../Pages/Items/items.css";
import ItemsTable from './../Utils/ItemsTable/ItemsTable';
import ItemsCard from "./../Pages/Items/Cards/ItemsCard/index";
import CategoryCard from './../Pages/Items/Cards/CategoryCard/index';
import LocationCard from './../Pages/Items/Cards/LocationCard/index';
import VendorCard from './../Pages/Items/Cards/VendorCard/index';
import SearchBar from "./../Utils/Search/index";
import './../Pages/Resell/resell.css';
import ResellTable from './../Utils/ResellTable/ResellTable';
import ResellCard from './../Pages/Resell/Cards/ResellCard/index';
import PieChart1 from '../Utils/Charts/Charts/HomeItemsDistribution/index';
import ResellPieChart from '../Utils/Charts/Charts/ResellPieChart/index';
import ScrapPieChart from '../Utils/Charts/Charts/ScrapPieChart';
import "./../Pages/Scrap/scrap.css";
import ScrapTable from "./../Utils/ScrapTable/ScrapTable";
import ScrapCard from './../Pages/Scrap/Cards/ScrapCard/index';
import "../../Styles/home.css";
import './../Home/homeCmp.css';
import Widget from "../Utils/Widget/index";
import PieChart2 from '../Utils/Charts/Charts/HomeFinanceSummary/index';
import { useState } from 'react';
import '../Pages/Reports/Reports/reports.css';

import BarChart from '../Utils/Charts/Charts/ReportsBarChart';
import AreaChart from '../Utils/Charts/Charts/ReportsLineChart/index';




const Index = (props) => {
  const [product, setProduct] = useState("");
  if (props.torender === "items") {

    const handleResult = P => {
      setProduct(P);
    };
    let t = "full";
    product ? t = "Pro" : t = "full";
    let name1 = product.name;
    // console.log(name);
    // console.log("abc",product);
    return (
      <div className="fe-home">
        <div className="fe-home-left">
          <SideBar />
        </div>
        <div className="fe-home-right">
          {/* <div className="fe-home-header-wrapper">
            <Header />
          </div> */}
          <div className="fe-home-content">
            {/* {props.render} */}
            <div className="fe-home-content-pages">
              <div className="fe-items">
                <div className="fe-items-cards">
                  <ItemsCard />
                  <CategoryCard />
                  <LocationCard />
                  <VendorCard />
                </div>
                <div className="fe-items-table-search">
                  <div className="fe-items-table-data">
                    <ItemsTable type={t} pname={name1} className='fe-items-table-main' />
                  </div>
                  <div className="fe-items-search-data">
                    <SearchBar className="fe-items-search" search="CategoriesItems" handleResult={handleResult} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
  if (props.torender === "resell") {
    const handleResult = P => {
      setProduct(P);
    };
    let t = "full";
    product ? t = "Pro" : t = "full";
    let name1 = product.name;
    return (
      <div className="fe-home">
        <div className="fe-home-left">
          <SideBar />
        </div>
        <div className="fe-home-right">
          {/* <div className="fe-home-header-wrapper">
            <Header />
          </div> */}
          <div className="fe-home-content">
            {/* {props.render} */}
            <div className="fe-home-content-pages">
              <div className="fe-resell">
                <div className='fe-resell-search-table-card'>
                  <div className='fe-resell-search-card'>
                    <SearchBar search="resell" handleResult={handleResult} />
                    <ResellCard />
                  </div>
                  <div className='fe-resell-table-data'>
                    <ResellTable type={t} pname={name1} className='fe-resell-table-main' />
                  </div>
                </div>
                <div className='fe-resell-chart'>
                  <ResellPieChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (props.torender === "scrap") {

    const handleResult = P => {
      setProduct(P);
    };
    let t = "full";
    product ? t = "Pro" : t = "full";
    let name1 = product.name;
    return (
      <div className="fe-home">
        <div className="fe-home-left">
          <SideBar />
        </div>
        <div className="fe-home-right">
          {/* <div className="fe-home-header-wrapper">
            <Header />
          </div> */}
          <div className="fe-home-content">
            {/* {props.render} */}
            <div className="fe-home-content-pages">
              <div className="fe-scrap">
                <div className="fe-scrap-search-table-add">
                  <div className="fe-scrap-search-add">
                    <SearchBar search="scrap" handleResult={handleResult} />
                    <ScrapCard />
                  </div>
                  <div className="fe-scrap-table-data">
                    <ScrapTable type={t} pname={name1} className="fe-scrap-table-main" />
                  </div>
                </div>
                <div className="fe-scrap-chart">
                  <ScrapPieChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (props.torender === "home") {
    return (
      <div className="fe-home">
        <div className="fe-home-left">
          <SideBar />
        </div>
        <div className="fe-home-right">
          {/* <div className="fe-home-header-wrapper">
          <Header />
        </div> */}
          <div className="fe-home-content">
            {/* {props.render} */}
            <div className="fe-home-content-pages">
              <div className="fe-home-main">
                <div className="fe-home-widget">
                  <Widget type='items' />
                  {/* <Widget type='maintenance' /> */}
                  <Widget type='scrap resell' />
                  {/* <Widget type='cost summary' /> */}
                </div>
                <div className="fe-home-recent-title">
                  <h3>Recent Item Details :</h3>
                </div>
                <div className="fe-home-table-chart">
                  <div className="fe-home-table">
                    <ItemsTable type='recent' />
                  </div>
                  <div className="fe-home-chart">
                    <PieChart1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (props.torender === "reports") {
    return (
      <div className="fe-home">
        <div className="fe-home-left">
          <SideBar />
        </div>
        <div className="fe-home-right">
          {/* <div className="fe-home-header-wrapper">
            <Header />
          </div> */}
          <div className="fe-home-content">
            {/* {props.render} */}
            <div className="fe-home-content-pages">
              <div className='fe-reports'>
                <div className='fe-reports-area-line'>
                  <div className='fe-reports-area-data'>
                    {/* <BarChart /> */}
                    <AreaChart />
                  </div>
                  <div className='fe-reports-bar-data'>
                    {/* <AreaChart/> */}
                    <BarChart />
                  </div>
                </div>
                <div className='fe-reports-pie'>
                  <div className='fe-reports-pie1-data'>
                    {/* Hello */}
                  </div>
                  <div className='fe-reports-pie2-data'>
                    {/* Hello */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Index
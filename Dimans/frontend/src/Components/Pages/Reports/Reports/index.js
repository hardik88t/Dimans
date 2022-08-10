import './reports.css';
import Layout from '../../../Layout/index';
import BarChart from '../../../Utils/Charts/Charts/ReportsBarChart/index';
import AreaChart from '../../../Utils/Charts/Charts/ReportsLineChart/index';

const toRender = (
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
);


const Index = () => {
  return (
    <div>
        <Layout render={toRender} torender={"reports"}/>
    </div>
  )
}

export default Index;
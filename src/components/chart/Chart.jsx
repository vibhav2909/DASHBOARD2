import "./chart.scss"
import "./bargraph.scss"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Bargraph from "./Bargraph";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from 'recharts';
const data = [
    {
      name: ' January',
      Visit:1200,
      Sale:500
    },
    {
      name: 'February',
      Visit:2100,
      Sale:600
    },
    {
      name: 'March',
      Visit:800,
      Sale:700
    },
    {
      name: 'April',
      Visit:890,
      Sale:570
    },
    {
      name: 'May',
      Visit:600,
      Sale:800
    },
    {
      name: 'June',
      Visit:900,
      Sale:880
    },
    {
      name: 'July',
      Visit:1700,
      Sale:450
    },
    {
        name: 'August',
        Visit:2000,
        Sale:400
      },
      {
        name: 'September',
        Visit:1250,
        Sale:900
      },
      {
        name: 'October',
        Visit:1200,
        Sale:950
      },
      {
        name: 'November',
        Visit:1400,
        Sale:1000
      },
      {
        name: 'December',
        Total:1600,
        Sale:1050
      },
  ];
const Chart = () => {
  return (
    <div className="chart">
         <div className="bar">
        <div className="title">Revenue</div>
       
        <div className="Visit"> Course Visit
        <FiberManualRecordIcon/></div>
        <div className="Sale"> Course Sale
        <FiberManualRecordIcon/></div>
        <div className="Month"> This Month
        <KeyboardArrowDownIcon/> </div>
        
        </div>
       <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="Visit" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Sale" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="red" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="red" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Visit" stroke="#8884d8" fillOpacity={1} fill="url(#Visit)" />
  <Area type="monotone" dataKey="Sale" stroke="#82ca9d" fillOpacity={1} fill="url(#Sale)" />
</AreaChart>
<Bargraph/>
    </div>
  )
}

export default Chart

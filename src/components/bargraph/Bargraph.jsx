import "./bargraph.scss"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
    {
      name: 'Mon',
      days: 20,
      amt: 10,
    },
    {
      name: 'Tue',
      days: 40,
      amt: 20,
    },
    {
      name: 'Wed',
      days: 60,
      amt: 30,
    },
    {
      name: 'Thu',
      days: 70,
      amt: 40,
    },
    {
      name: 'Fri',
      days: 90,
      amt: 50,
    },
    {
      name: 'Sat',
      days: 45,
      amt: 60,
    },
    {
      name: 'Sun',
      days: 60,
      amt: 70,
    },
  ];
  
  const Bargraph = () => {
  return (
    <div className="bargraphcontainer">
  <div className="st">
        Visitors
        <div className="hi">
        <TrendingDownIcon/>
        -0.3%
        </div>
        <MoreVertIcon/>
        </div>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="days" fill="purple" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>

      </div>
  )
}

export default Bargraph

import "./box1.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
//   const data1= [
//     {
//         img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",

//     },
//   ];
  
const Box1 = () => {
  return (
    <div className="x">
        <div className="x1">
        Weekly Status
        <MoreVertIcon/>
        </div>
   
    <AreaChart
          width={300}
          height={150}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <div className="bottom">
            <div className="pics">
           
        <div className="pic1"><img src="https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg" /></div>
        <div className="pic2"><img src="https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg"/></div>
        <div className="pic3"><img src="https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg"/></div>

        </div>
         
        <div className="name">
        <div className="name1">Adobe
        <div className="ui">UI/UX DESIGN</div>
        
        </div>
        <div className="name2">Adobe
        <div className="ui">UI/UX DESIGN</div></div>
        <div className="name3">Adob
        <div className="ui">UI/UX DESIGN</div></div>
            </div>
            <div className="money">
        <div className="mo1">$20</div>
        <div className="mo2">$20</div>
        <div className="mo3">$20</div>
            </div>
        </div>
        </div>
  )
}

export default Box1

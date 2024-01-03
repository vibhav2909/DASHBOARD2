import "./widget.scss"
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Widget = ({type}) => {
  let data;

  switch (type){
    case "Impressions":
      data={
        title: "Impressions",
        nu:832
      };
      break;
      case "Total Audience":
      data={
        title: "Total Audience",
        nu:832
      };
      break;
      case "Engagements":
      data={
        title: "Engagements",
        nu:832
      };
      break;
      case "Engaged Audience":
      data={
        title: "Engaged Audience",
        nu:832
      };
      break;
      default:
        break;
        

  }


  return (
    <div className="widget">
         <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.nu}</span>
         
          </div>
         <div className="right">
          <QueryStatsIcon/>
         </div>
    </div>
  )
}

export default Widget

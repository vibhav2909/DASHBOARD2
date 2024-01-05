import "./query.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };
const Query = () => {
  return (
    <div className="query">
        <div className="Top">
        Student Queries
        <MoreVertIcon/>
        </div>
        <div className="bottom">
            <div className="pics">
           
        <div className="pic1"><img src="https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg" /></div>
        <div className="pic2"><img src="https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg"/></div>
        <div className="pic3"><img src="https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"/></div>
        <div className="pic3"><img src="https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg"/></div>

        </div>
         
        <div className="name">
        <div className="name1">Python and R in Data Sceince
        <div className="ui">Data Science</div>
        
        </div>
        <div className="name2">Machine Learning Bootcamp
        <div className="ui">by James Bond</div></div>
        <div className="name3">SuperDataScience Support
        <div className="ui">Data Science</div></div>
        <div className="name4">Analyst Bootcamp 2020
        <div className="ui">Data Science</div>
        
        </div>
            </div>
            <div className="abc">
            <div className="money">
        <div className="mo1">Approve</div>
        <div className="mo2">Approve</div>
        <div className="mo3">Approve</div>
        <div className="mo4">Approve</div>
            </div>
            <div className="dec">
        <div className="dec1">Decline</div>
        <div className="dec2">Decline</div>
        <div className="dec3">Decline</div>
        <div className="dec4">Decline</div>
            </div>
            </div>
        </div>
    </div>
    
  )
}

export default Query

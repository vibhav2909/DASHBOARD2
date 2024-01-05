import "./navbar.scss"
import MessageIcon from '@mui/icons-material/Message';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { UploadOutlined } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import BackHandIcon from '@mui/icons-material/BackHand';
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="wrapper">
    <div className="item">
        <div className="hii">
            <MenuIcon/>
            Hello Mad
            <BackHandIcon/>
            </div>
        </div>
        <div className="search">
            <input type="text" placeholder="Search Here"/>
            <YoutubeSearchedForIcon/>
        </div>
        
        <div className="items">
            <div className="item">
                New Upload
                <UploadOutlined/>
            </div>
            <div className="item">
            <NotificationsActiveIcon/>
            <div className="counter">1</div>
            </div>
            <div className="item">
                <MessageIcon/>
                <div className="counter">2</div>
            </div>
            <div className="item">
                <TrendingUpIcon/>
            </div>
            <div className="item">
                <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
                />
            </div> 
            
        </div>
    </div>
    </div>
  )
}

export default Navbar

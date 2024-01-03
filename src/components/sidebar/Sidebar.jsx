import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import WalletIcon from '@mui/icons-material/Wallet';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MessageIcon from '@mui/icons-material/Message';
import ExtensionIcon from '@mui/icons-material/Extension';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <AllInclusiveIcon/>
            <span classname="logo<">Skilify Admin</span>
            </div>
            <hr/>
        <div className="centre">
            <ul>
                <li>
                    <DashboardIcon/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <SlideshowIcon/>
                    <span>MyCourse</span>
                </li>
                <li>
                    <CalendarMonthIcon/>
                    <span>Calendar</span>
                </li>
                <li>
                    <MenuBookIcon/>
                    <span>Resource</span>
                </li>
                <li>
                    <ExtensionIcon/>
                    <span>Quiz</span>
                </li>
                <li>
                    <MessageIcon/>
                    <span>Message</span>
                </li>
                <li>
                    <TrendingUpIcon/>
                    <span>MyStatus</span>
                </li>
                <li>
                    <WalletIcon/>
                    <span>Wallet</span>
                </li>
                <li>
                    <PermIdentityIcon/>
                    <span>MyAccount</span>
                </li>


            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
       
            
        </div>
    </div>
  )
}

export default Sidebar

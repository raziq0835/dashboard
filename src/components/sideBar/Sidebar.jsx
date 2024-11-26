import { ChartColumnBig,
     CircleHelp, 
     LayoutDashboard, 
     MessageCircleCode, 
     MessageCircleMore, 
     MonitorDot, 
     ScrollText, 
     Settings, 
     Sun, 
     Wallet2 } from 'lucide-react'
import profile from '../../assets/profile.jpg' 
import Logo from '../logo/Logo'
import './sidebar.css'
const sidebar = () => {
  return (
    <>
    <aside className='sidebar'>
    <Logo/> 
    <ul className='tabs'>
        <li className='tab'>
            <a href="#"><LayoutDashboard/><h3>Dashboard</h3></a>
        </li>
        <li className='tab'>
            <a href="#"><MessageCircleMore/><h3>Message</h3></a>
        </li>
        <li className='tab'>
            <a href="#"><ScrollText/><h3>Invoice</h3></a>
        </li>
        <li className='tab'>
            <a href="#"><Wallet2/><h3>Wallet</h3></a>
        </li>
        <li className='tab'>
            <a href="#"><ChartColumnBig/><h3>chart</h3></a>
        </li>
        <li className='tab'>
            <a href="#"><MonitorDot/><h3>My Activity</h3></a>
        </li>
        <li className='tab'>
            <a href="#"><Settings/><h3>Settings</h3></a>
        </li>
    </ul> 

    <div className="bottom">
        <ul className='bTabs'>
            <li className='btab'>
                <a href="#"><CircleHelp/><h3>Help</h3></a>
            </li>
            <li className='btab'>
                <a href="#"><Sun/><h3>Them</h3></a>
            </li>
        </ul>
        <div className="user">
            <div className="profile">
                <img src={profile} alt='profile pic'></img>
            </div>
            <div className="details"><h4>Suhaib Khan</h4></div>
            <div className="muted"><h4>Muted</h4></div>
        </div>

    </div>
    </aside>
    </>
  )
}

export default sidebar

import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import notification from '../../assets/notification.png'
import profile from '../../assets/jack.png'
import more from '../../assets/more.png'
import { Link } from 'react-router-dom'
import no from '../../assets/no.png'



const Navbar = ({setsidebar}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img className='menu_icon' src={menu_icon} alt="" onClick={()=>setsidebar(prev=>prev?false:true)} />
            {/* through setsidebar menu can be closed and opened again and again */}
            <Link to='/'> <img className='logo' src={no} alt="" /></Link>
        </div>
        <div className="nav-middle flex-div">
           <div className="search-box">
           <input type="text" placeholder ="Search" />
            <img src= {search} alt=""/>
           </div>
        </div>

        <div className="nav-right flex-div">
            <img src={upload}alt="" />
            <img src={more} alt="" />
            <img src={notification} alt="" />
            <img src={profile} alt=""  className='user-icon'/>
        </div>
    </nav>
  )
}

export default Navbar
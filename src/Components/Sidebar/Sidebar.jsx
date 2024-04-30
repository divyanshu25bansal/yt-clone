import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const Sidebar = ({sidebar , setcategory ,category}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-link">
        <div className={`side-link  ${category===0?"active":""}`} onClick={()=>setcategory(0)}>
          <img src={home} alt="" /><p>home</p>
        </div>
        <div className={`side-link  ${category===20?"active":""}`} onClick={()=>setcategory(20)}>
          <img src={game_icon} alt="" /><p>game</p>
        </div>
        <div className={`side-link  ${category===2?"active":""}`} onClick={()=>setcategory(2)}>
          <img src={automobiles} alt="" /><p>automobiles</p>
        </div>
        <div className={`side-link  ${category===17?"active":""}`} onClick={()=>setcategory(17)}>
          <img src={sports} alt="" /><p>sports</p>
        </div>
        <div className={`side-link  ${category===24?"active":""}`} onClick={()=>setcategory(24)}>
          <img src={entertainment} alt="" /><p>entertainment</p>
        </div>
        <div className={`side-link  ${category===28?"active":""}`} onClick={()=>setcategory(28)}>
          <img src={tech} alt="" /><p>tech</p>
        </div>
        <div className={`side-link  ${category===10?"active":""}`} onClick={()=>setcategory(10)}>
          <img src={music} alt="" /><p>music</p>
        </div>
        <div className={`side-link  ${category===22?"active":""}`} onClick={()=>setcategory(22)}>
          <img src={blogs} alt="" /><p>blogs</p>
        </div>
        <div className={`side-link  ${category===25?"active":""}`} onClick={()=>setcategory(25)}>
          <img src={news} alt="" /><p>news</p>
        </div>
      </div>
      <hr />
      <div className="subscribed-list">
      <h3>Subscribed</h3>
      <div className="side-link">
          <img src={jack} alt="" /><p>jack</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" /><p>simon</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" /><p>tom</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" /><p>megan</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" /><p>cameron</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
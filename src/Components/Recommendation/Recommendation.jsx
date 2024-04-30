import React from 'react'
import './Recommendation.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

const Recommendation = () => {
  return (
    <div className='recommendation'>
      <div className="side-video-list">
        <img src={thumbnail1} alt="" />
        <div className='side-video-info'>
          <h4>A channel where you learn the best</h4>
          <p>codeWithMe</p>
          <p>100k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail2} alt="" />
        <div className='side-video-info'>
          <h4>A channel where you learn the best</h4>
          <p>codeWithMe</p>
          <p>100k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail3} alt="" />
        <div className='side-video-info'>
          <h4>A channel where you learn the best</h4>
          <p>codeWithMe</p>
          <p>100k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail4} alt="" />
        <div className='side-video-info'>
          <h4>A channel where you learn the best</h4>
          <p>codeWithMe</p>
          <p>100k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail5} alt="" />
        <div className='side-video-info'>
          <h4>A channel where you learn the best</h4>
          <p>codeWithMe</p>
          <p>100k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail6} alt="" />
        <div className='side-video-info'>
          <h4>A channel where you learn the best</h4>
          <p>codeWithMe</p>
          <p>100k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail7} alt="" />
        <div className='side-video-info'>
          <h4>A channel where you learn the best</h4>
          <p>codeWithMe</p>
          <p>100k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail8} alt="" />
        <div className='side-video-info'>
          <h4>A channel where you learn the best</h4>
          <p>codeWithMe</p>
          <p>100k views</p>
        </div>
      </div>
    </div>

  )
}

export default Recommendation
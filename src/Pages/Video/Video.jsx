import React from 'react'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommendation from '../../Components/Recommendation/Recommendation'
import { useParams } from 'react-router-dom'


const Video = () => {

  const {videoId,categoryId} = useParams()
  return (
    <div className='play-container'>
      <Playvideo  videoId= {videoId}/>
      <Recommendation categoryId = {categoryId}/>
    </div>
  )
}

export default Video
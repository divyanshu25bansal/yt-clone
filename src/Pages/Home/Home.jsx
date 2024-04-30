import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'


const Home = ({sidebar}) => {
const [category,setcategory] =useState(0)

  return (
    <div>
     < Sidebar sidebar={sidebar} category = {category} setcategory={setcategory} />
     <div className={`container ${sidebar?"":"large-container"}`} >
     <Feed Category={category}/>
     </div>
    </div>
  )
}

export default Home
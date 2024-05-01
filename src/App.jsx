import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
const App = () => {
 
  const [sidebar,setsidebar] = useState(true)

  return (
    <div>
      {/* it will render navbar first */}
      <Navbar setsidebar = {setsidebar} />
      {/* after these routes will be returned Home is the default one */}
      <Routes>
        <Route path="/" element={<Home  sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element ={<Video/>} />
      </Routes>
    </div>
  );
};

export default App;

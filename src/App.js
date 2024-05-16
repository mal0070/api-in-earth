import React from "react";
import Main from "./Main";
import Intro from "./Intro.js";
import Map from "./Map.js";
import Education from "./Education.js";
import ReportRoom from "./ReportRoom.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

function App () {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="menu">
            <li><Link to='/intro'>서비스소개</Link></li>
            <li><Link to='/map'>위치서비스</Link></li>
            <li><Link to='/education'>단계별교육</Link></li>
            <li><Link to='/reportroom'>정보실</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path='/intro' element={<Intro/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/reportroom' element={<ReportRoom/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;

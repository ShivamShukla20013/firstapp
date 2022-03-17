
import './App.css';


import React from 'react'
import FirstComp from './components/FirstComp';
import SecoComp from './components/SecoComp';
import FunComp from './components/FunComp';
import ClassComp from './components/ClassComp';
import './components/CompCSS.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
  <>
   <div><FirstComp/></div>
   <div><SecoComp/></div>
  
   
    <BrowserRouter>
    <Routes>
      <Route path="/C" element={<ClassComp/>}></Route>
      <Route path="/F" element={<FunComp/>}></Route>
    </Routes>
    </BrowserRouter>
   
  </>
  );
}

export default App;

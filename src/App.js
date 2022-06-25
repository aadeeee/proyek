
import Home from './component/home/Home';
import Hardware from './component/hardware/HardWare';
import Gaming from './component/gaming/Gaming';
import Category from './component/category/Category';
import {  Router,Routes, Route} from "react-router-dom";
import './App.css';
import React, { Fragment } from 'react';

class App extends React.Component {
  render(){
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gaming' element={<Gaming />} />
        <Route path='/hard-ware' element={<Hardware />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    )
  }
}
export default App;

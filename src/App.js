import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar'
import News from './components/News'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { renderHook } from '@testing-library/react';

export default class App extends Component {
  pageSize = 20;
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/sports" element={<div className='container'><News key="sports" pageSize={this.pageSize} category="sports" /></div>}/>
            <Route exact path="/business" element={<div className='container'><News key="business" pageSize={this.pageSize} category="business" /></div>}/>
            <Route exact path="/entertainment" element={<div className='container'><News key="entertainment" pageSize={this.pageSize} category="entertainment" /></div>}/>
            <Route exact path="/" element={<div className='container'><News key="general" pageSize={this.pageSize} category="general" /></div>}/>
            <Route exact path="/health" element={<div className='container'><News key="health" pageSize={this.pageSize} category="health" /></div>}/>
            <Route exact path="/science" element={<div className='container'><News key="science" pageSize={this.pageSize} category="science" /></div>}/> 
            <Route exact path="/sports" element={<div className='container'><News key="sports" pageSize={this.pageSize} category="sports" /></div>}/>
            <Route exact path="/technology" element={<div className='container'><News key="technology" pageSize={this.pageSize} category="technology" /></div>}/>
          </Routes>
        </Router>
      </>
    )
  }
}

// NewsApi Key = 83fe5edfbf3e44e2aa1f993f8f657c89
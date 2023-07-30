import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <News/>
        </div>
      </>
    )
  }
}

// NewsApi Key = 83fe5edfbf3e44e2aa1f993f8f657c89
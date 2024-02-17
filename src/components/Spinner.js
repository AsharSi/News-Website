import React, { Component } from 'react'
import Loading from './Images/loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-2'>
        <img src={Loading} alt="loading" style={{height: '70px'}}/>
      </div>
    )
  }
}

export default Spinner
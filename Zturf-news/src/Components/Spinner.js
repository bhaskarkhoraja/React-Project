import React, { Component } from 'react'
import loading from '../Asset/Loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='mb-4' src={loading} alt="Loading__" style={{height:"10em", width:"10em"}}/>
      </div>
    );
  }
}

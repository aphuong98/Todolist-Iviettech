import React, { Component } from 'react'
import './style.css'

export default class Input extends Component {
 
  render() {
    return (
      <input
        className='input input-form'
        placeholder='Add new task in here'
        value={this.props.value}
        onChange={this.props.handleChangeInputTask}
      />
    )
  }
}

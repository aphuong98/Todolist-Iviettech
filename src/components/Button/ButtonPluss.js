import React, { Component } from 'react'
import './style.css'

export default class ButtonPluss extends Component {


  render() {
    return (
      <button
        className='button button-plus'
        style={{ fontSize: 20 }}
        onClick={this.props.onClick}
      >+</button>
    )
  }
}

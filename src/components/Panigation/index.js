import React, { Component } from 'react'
import './style.css'

export default class Panigation extends Component {
  render() {
    const { currentPage, limit, taskLists, handleSetCurrentPage } = this.props
    const endPage = taskLists.length / limit
    return (
      <div className='panigation-wrapper'>
        {currentPage !== 1 && <button className='button ' onClick={() => handleSetCurrentPage(currentPage - 1)}>{'<'}</button>}
        {currentPage - 1 > 0 && <button className='button' onClick={() => handleSetCurrentPage(currentPage - 1)}>{currentPage - 1}</button>}
        <button className='button button-color'>{currentPage}</button>
        {currentPage < endPage && <button className='button' onClick={() => handleSetCurrentPage(currentPage + 1)}>{currentPage + 1}</button>}
        {currentPage < endPage && <button className='button' onClick={() => handleSetCurrentPage(currentPage + 1)}>{'>'}</button>}
      </div >
    )
  }
}

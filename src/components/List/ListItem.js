import ButtonSpecial from 'components/Button/ButtonSpecial'

import React, { Component } from 'react'
import ListContent from './ListContent'
import './style.css'

export default class ListItem extends Component {
 
  render() {
    const { task, handleDeleteTask, handleCompleteTask } = this.props
    return (
      <>
        <div className='list-item'>
          <div>
            <ListContent content={task.taskName} isCompleted={task.isCompleted} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {
              !task.isCompleted &&
              <ButtonSpecial completed onClick={() => handleCompleteTask(task.id)}
              />
            }
            <ButtonSpecial remove onClick={() => handleDeleteTask(task.id)} />
          </div>
        </div>
        
      </>
    )
  }
}

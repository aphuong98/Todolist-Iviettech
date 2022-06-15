import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {
 
  render() {
    const { taskLists, handleDeleteTask, handleCompleteTask } = this.props
    return (
      <div className='list-wrapper'>
        {taskLists.map(taskItem => (
          <ListItem
            key={taskItem.id}
            task={taskItem}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
          />
        ))}
      </div>
    )
  }
}

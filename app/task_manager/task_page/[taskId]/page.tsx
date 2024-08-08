import React from 'react'
import TaskForm from '../../_components/TaskForm'

const page = ({params}:{params:any}) => {
  // const {taskId} = task
  return (
    <div>
      <TaskForm taskId={params.taskId}></TaskForm>
    </div>
  )
}

export default page

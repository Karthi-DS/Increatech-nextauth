import React from 'react'
import UserForm from '../../../_components/UserForm'

const page = ({params}:{params:any}) => {
  // const {taskId} = task
  return (
    <div>
      <UserForm userId={params.userId}></UserForm>
    </div>
  )
}

export default page

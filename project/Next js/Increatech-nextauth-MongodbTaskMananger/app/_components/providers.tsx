"use client";
import React from 'react'
import { Provider } from 'react-redux'
import { taskStore } from '../taskStore'

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={taskStore}>
        {children}
    </Provider>
  )
}

export default Providers

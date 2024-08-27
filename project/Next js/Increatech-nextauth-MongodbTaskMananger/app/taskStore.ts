import {configureStore} from "@reduxjs/toolkit"
import taskSlice from "./taskSlice"

export const taskStore = configureStore({
    devTools:true,
    reducer:{
        tasks:taskSlice
    }
})

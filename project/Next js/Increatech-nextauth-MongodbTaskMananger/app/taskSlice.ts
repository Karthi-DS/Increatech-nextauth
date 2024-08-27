import { createSlice } from "@reduxjs/toolkit";

const initialTask = {};
const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialTask,
    reducers: {
        addTask(state, action) {
            // Update state by directly modifying the state object
            return { ...state, ...action.payload };
        }
    }
})

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "task 2",
        description: "Task 2 description",
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers:{
        addTask: (state, action) => {
            state.push(action.payload)
            //[...state, action.payload]
        },
        deleteTask:(state, action) => {
            console.log(action.payload)
            const taskfound = state.find(task => task.id === action.payload);
            if(taskfound)
                state.splice(state.indexOf(taskfound), 1);
        },
        editTask: (state, action) => {
            const {id, title, description} = action.payload;
            const taskfound = state.find(task => task.id === id);
            if(taskfound){
                taskfound.title = title;
                taskfound.description = description;
                taskfound.id = id;
            }
        }
    }
})


export const {addTask, deleteTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;
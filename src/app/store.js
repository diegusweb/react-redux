import { configureStore } from '@reduxjs/toolkit'
import postsSlice from '../features/posts/postsSlice'
import tasksReducer from '../features/tasks/taskSlice'
import userSlice from '../features/users/userSlice'


export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        users: userSlice,
        posts: postsSlice
    }
  })

  
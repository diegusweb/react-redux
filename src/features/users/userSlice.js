import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (dispatch, getState) => {
      return await fetch("https://jsonplaceholder.typicode.com/users").then(
        (res) => res.json()
      );
    }
  );

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        users: [],
        status: null
    },
    extraReducers:{
        [getUsers.pending]: (state, action) => {
            state.status = "loading";
          },
          [getUsers.fulfilled]: (state, action) => {
            state.status = "success";
            state.users = action.payload;
          },
          [getUsers.rejected]: (state, action) => {
            state.status = "failed";
          },
    }
});

export default userSlice.reducer;
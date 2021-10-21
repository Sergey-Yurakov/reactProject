import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
   name: 'data',
   initialState: {
       login: 'developer21',
       password: 123456
   },
    reducers: {

    }
});

//export const {} = dataSlice.actions;

export const selectLogin = state => state.data.login;
export const selectPass = state => state.data.password;

export default dataSlice.reducer;

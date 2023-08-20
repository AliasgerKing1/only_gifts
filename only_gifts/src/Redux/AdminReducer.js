import {createSlice} from "@reduxjs/toolkit";

let initialState = {};

let adminReducer = createSlice({
    name : "Admin",
    initialState,
    reducers : {
        getAdminRed(state, action) {
return [...state, ...action.payload];
        }
    }
})

export default adminReducer.reducer;
export const {getAdminRed} = adminReducer.actions;
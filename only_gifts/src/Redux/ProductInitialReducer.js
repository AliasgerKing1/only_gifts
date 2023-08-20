import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let productInitialReducer = createSlice({
    name : "intial infinite product",
    initialState,
    reducers : {
        getProductInitialRed(state, action) {
return [...state, ...action.payload];
        }
    }
})

export default productInitialReducer.reducer;
export const {getProductInitialRed} = productInitialReducer.actions;
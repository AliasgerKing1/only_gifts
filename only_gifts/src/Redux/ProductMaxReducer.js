import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let productMaxReducer = createSlice({
    name : "product",
    initialState,
    reducers : {
        getProductMaxRed(state, action) {
return [...state, ...action.payload];
        }
    }
})

export default productMaxReducer.reducer;
export const {getProductMaxRed} = productMaxReducer.actions;
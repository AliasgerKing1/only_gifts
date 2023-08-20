import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let productReducer = createSlice({
    name : "product",
    initialState,
    reducers : {
        getProductRed(state, action) {
return [...state, ...action.payload];
        }
    }
})

export default productReducer.reducer;
export const {getProductRed} = productReducer.actions;
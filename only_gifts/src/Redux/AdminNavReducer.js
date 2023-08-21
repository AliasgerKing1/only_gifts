import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    product : false,
    category : false ,
    company : false
};

let AdminNavReducer = createSlice({
    name : "Admin Nav",
    initialState,
    reducers : {
        getCategoryRed : (state, action) =>{
         state.category =   action.payload;
        },
        getProductByRed : (state, action) =>{
         state.product =   action.payload;
        },
        getCompanyRed : (state, action) =>{
         state.company =   action.payload;
        },
    }
})

export default AdminNavReducer.reducer;
export const {getCategoryRed, getProductByRed, getCompanyRed} = AdminNavReducer.actions;
import { createReducer, createSlice } from "@reduxjs/toolkit";
import allBooks from "../actions/actionBooks.js";


const initialState={
    books:[],
    pending: false,
    error: null
}

const bookReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(
        allBooks.fulfilled, (state, action)=> {
            console.log("action",action)
            console.log("action payload",action.payload)
            state.books=action.payload
            state.pending = false
        }
    )
    .addCase(
        allBooks.pending, (state)=> {
            console.log("Estado pending:", true);
            state.pending = true
        }
    )
    .addCase(allBooks.rejected, (state, action) => {
        console.log("Error:", action.error.message);
        state.error = action.error.message;
        state.pending = false;
      });
})

export default bookReducer
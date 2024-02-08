import { createReducer, createSlice } from "@reduxjs/toolkit";
import allBooks from "../actions/actionBooks.js";
import oneBook from "../actions/actionDetails.js";


const initialState={
    books:[],
    book: "",
    pending: false,
    error: null
}

const bookReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(allBooks.fulfilled, (state, action) => {
            state.books = action.payload;
            state.pending = false;
        })
        .addCase(allBooks.pending, (state) => {
            state.pending = true;
        })
        .addCase(allBooks.rejected, (state, action) => {
            state.error = action.error.message;
            state.pending = false;
        })
});

export default bookReducer
import { createReducer } from "@reduxjs/toolkit";
import oneBook from "../actions/actionDetails.js";


const initialState={
    books: [],
    pending: false,
    error: null
}

const oneBookReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(oneBook.fulfilled, (state, action) => {
            const book = action.payload;
            const existingBook = state.books.find(b => b.isbn === book.isbn);
            if (!existingBook) {
                state.books = [...state.books, book];
            }
            state.pending = false;
        })
        .addCase(oneBook.pending, (state) => {
            state.pending = true;
        })
        .addCase(oneBook.rejected, (state, action) => {
            state.error = action.error.message;
            state.pending = false;
        });
});

export default oneBookReducer;
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./reducer/booksReducer";

export const store = configureStore({
    reducer:{
        bookReducer
    }
})
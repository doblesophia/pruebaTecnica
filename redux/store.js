import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./reducer/booksReducer";
import housesReducer from "./reducer/housesReducer";
import favoriteReducer from "./reducer/favoriteReducer";
import oneBookReducer from "./reducer/detailReducer";

export const store = configureStore({
    reducer:{
        bookReducer,
        housesReducer,
        favoriteReducer,
        oneBookReducer
    }
})
import { createReducer } from "@reduxjs/toolkit";
import { addFavorite, removeFavorite } from "../actions/actionFavorite";

const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
    favorites: storedFavorites
}

const favoriteReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(addFavorite, (state, action) => {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    })
    .addCase(removeFavorite, (state, action) => {
        state.favorites = state.favorites.filter(favorite => favorite !== action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }) 
})


export default favoriteReducer;
import { createReducer } from "@reduxjs/toolkit";
import allHouses from "../actions/actionHouses";

const initialState={
    houses: [],
    pending: false,
    error: null
}

const housesReducer = createReducer(initialState, (builder)=> {
    builder
    .addCase(
        allHouses.fulfilled, (state, action) => {
            state.houses=action.payload
            state.pending= false
        }
    )
    .addCase(
        allHouses.pending, (state)=>{
            state.pending=true
        }
    )
    .addCase(
        allHouses.rejected, (state, action)=>{
            console.log("Error", action.error.message)
            state.error=action.error.message
            state.pending=false;
        }
    )
})

export default housesReducer
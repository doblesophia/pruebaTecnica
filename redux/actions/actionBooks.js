import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const allBooks = createAsyncThunk('allBooks', async() =>{
    try {
        const res = await axios.get('https://anapioficeandfire.com/api/books')
        console.log("RES ANTES DEL .DATA", res);
        return res.data
    } catch (error) {
        console.log(error, "error")
    }
})

export default allBooks

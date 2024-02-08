import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const allBooks = createAsyncThunk('allBooks', async() =>{
    try {
        const res = await axios.get('https://anapioficeandfire.com/api/books')
        return res.data
    } catch (error) {
        console.log(error, "error")
    }
})

export default allBooks

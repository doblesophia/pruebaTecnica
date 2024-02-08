import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const oneBook = createAsyncThunk('oneBook', async(param)=> {
    try {
      const res = await axios.get(`https://anapioficeandfire.com/api/books/${param}`);
        return res.data;
    } catch (error) {
        console.log("Error en la solicitud HTTP:", error);
    }
    
})

export default oneBook
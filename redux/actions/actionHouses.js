import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const allHouses = createAsyncThunk('allHouses', async()=> {
    try {
        const houses = [];

    for (let i = 1; i <= 444; i++) {
      const res = await axios.get(`https://anapioficeandfire.com/api/houses/${i}`);
      houses.push(res.data);
    }

    return houses;
    } catch (error) {
        console.log("error", error)
    }
    
})

export default allHouses
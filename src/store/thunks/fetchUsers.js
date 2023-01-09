import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('ttp://localhost:300/users');
    // console.log(response)
    return response.data;
});

export { fetchUsers };
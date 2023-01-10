import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";


const addUser = createAsyncThunk('users/add', async () => {
    const response = await axios.post('http://localhost:3000/users', {
        name: faker.name.fullName()
    });

    await pause(1000)
    return response.data;
});

export { addUser };

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

import { configureStore, createSlice } from '@reduxjs/toolkit';


const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        resetSong(state, action) {
            return [];
        }
    }
});

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        resetMovie(state, action) {
            return [];
        }
    }
});


const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});

// console.log(store.getState())

// console.log(songsSlice);
// console.log(store);

// store.dispatch({
//     type: 'song/addSong',
//     payload: 'abcdefgh'
// });


// console.log(store.getState())

export default store;
export const { addSong, removeSong, resetSong } =  songsSlice.actions;
export const { addMovie, removeMovie, resetMovie } =  moviesSlice.actions;

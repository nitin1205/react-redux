// import { configureStore } from '@reduxjs/toolkit';
// import { songsReducer, addSong, removeSong } from './slices/songsSlice';
// import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
// import { reset } from './actions';

// const store = configureStore({
//     reducer: {
//         songs: songsReducer,
//         movies: moviesReducer
//     }
// });

// console.log(store.getState())

// console.log(songsSlice);
// console.log(store);

// store.dispatch({
//     type: 'song/addSong',
//     payload: 'abcdefgh'
// });


// console.log(store.getState())
// export { store, addSong, removeSong, addMovie, removeMovie, reset };


// import { configureStore } from "@reduxjs/toolkit";

// import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
// import { formReducer, changeName, changeCost } from "./slices/fromSlice";


// const store = configureStore({
//     reducer: {
//         cars: carsReducer,
//         form: formReducer
//     }
// });

// export {
//     store,
//     changeName,
//     changeCost,
//     addCar,
//     removeCar,
//     changeSearchTerm
// };


//  CRUD store

import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "./slices/usersSlice";


const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

export { store };
export * from './thunks/fetchUsers';























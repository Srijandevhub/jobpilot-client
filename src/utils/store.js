import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

const store = configureStore({
    user: userReducer
});

export default store;
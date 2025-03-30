import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        isAuthenticated: false,
        status: 'idle',
        error: null
    }
});

export default userSlice.reducer
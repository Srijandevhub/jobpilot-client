import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../url";

export const protectedUser = createAsyncThunk("user/protectedUser", async (_, thunkAPI) => {
    try {
        const res = await axios.get(`${baseUrl}/api/v1/user/protected`, {
            withCredentials: true
        });
        return res.data.user;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
})

export const logoutUser = createAsyncThunk("user/logouUser", async (_, thunkAPI) => {
    try {
        const res = await axios.post(`${baseUrl}/api/v1/user/logout`, { },{
            withCredentials: true
        });
        return res.status;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        isAuthenticated: false,
        status: 'idle',
        error: null
    },
    reducers: {
        updateuser: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(protectedUser.pending, (state) => {
            state.status = "loading";
        }).addCase(protectedUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isAuthenticated = true;
            state.status = 'success';
        }).addCase(protectedUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        }).addCase(logoutUser.pending, (state) => {
            state.status = "loading";
        }).addCase(logoutUser.fulfilled, (state) => {
            state.data = null;
            state.isAuthenticated = false;
            state.status = 'success';
        }).addCase(logoutUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
    }
});

export const { updateuser } = userSlice.actions;
export default userSlice.reducer
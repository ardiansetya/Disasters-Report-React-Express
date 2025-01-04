import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/AxiosInstance";

const initialState = {
    user: '',
    token: '',
    data: [],
    loading: false,
    message: '',
};

export const fetchData = createAsyncThunk("user/fetchData", async () => {
    try {
        const response = await axiosInstance.get("/disasters");
        return response.data;
    } catch (err) {
        const errorMessage =
            err.response?.data?.message || "Failed to fetch data.";
        throw new Error(errorMessage);
    }
});

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setData: (state, action) => {
            state.data = action.payload
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.message = '';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.message = action.payload.message
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.message = action.payload.message;
            });
    }
});

export default UserSlice

export const { login, logout , setData} = UserSlice.actions;

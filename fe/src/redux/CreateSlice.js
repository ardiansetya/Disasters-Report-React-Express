import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/AxiosInstance";
import { useNavigate } from "react-router-dom";

const initialState = {
    user: '',
    token: '',
    data: [],
    loading: false,
    message: "",
};


// Thunks
export const login = createAsyncThunk("user/login", async (credentials, { rejectWithValue }) => {

    try {
        const response = await axiosInstance.post("/login", credentials);
        localStorage.setItem("authToken", response.data.token);

        return response.data;
    } catch (err) {
        return rejectWithValue(
            err.response?.data?.message || "Failed to login."
        );
    }
});

export const register = createAsyncThunk("user/register", async (credentials, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/register", credentials);
        return response.data;
    } catch (err) {
        return rejectWithValue(
            err.response?.data?.message || "Failed to register."
        );
    }
});

export const fetchData = createAsyncThunk("user/fetchData", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/disasters");
        return response.data;
    } catch (err) {
        return rejectWithValue(
            err.response?.data?.message || "Failed to fetch data."
        );
    }
});

export const postData = createAsyncThunk("user/postData", async (formData, { rejectWithValue }) => {
    try {
        const formattedData = {
            ...formData,
            date: new Date(formData.date).toISOString(),
        };
        const response = await axiosInstance.post("/disasters", formattedData);
        return response.data;
    } catch (err) {
        return rejectWithValue(
            err.response?.data?.message || "Failed to post data."
        );
    }
});

// Slice
const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.message = "";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.message = "Login successful.";
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.message = action.payload || "Failed to login.";
            })
            // Register
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.message = "";
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.message = "Registration successful.";
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.message = action.payload || "Failed to register.";
            })
            // Fetch Data
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.message = "";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.message = "Data fetched successfully.";
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.message = action.payload || "Failed to fetch data.";
            })
            // Post Data
            .addCase(postData.pending, (state) => {
                state.loading = true;
                state.message = "";
            })
            .addCase(postData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = [...state.data, action.payload];
                state.message = "Data posted successfully.";
            })
            .addCase(postData.rejected, (state, action) => {
                state.loading = false;
                state.message = action.payload || "Failed to post data.";
            });
    },
});

export default UserSlice;

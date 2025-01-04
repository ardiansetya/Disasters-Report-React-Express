import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/AxiosInstance";

const initialState = {
    user: '',
    token: '',
    data: [],
    loading: false,
    message: '',
};

export const login = createAsyncThunk("user/login", async (credentials) => {
    try {
        const response = await axiosInstance.post("/login", credentials);
        return response.data;
    } catch (err) {
        const errorMessage =
            err.response?.data?.message || "Failed to login.";
        throw new Error(errorMessage);
    }
});

export const register = createAsyncThunk("user/register", async (credentials) => {
    try {
        const response = await axiosInstance.post("/register", credentials);
        console.log(response)
        return response.data;
    } catch (err) {
        const errorMessage =
            err.response?.data?.message || "Failed to login.";
        throw new Error(errorMessage);
    }
})

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
        // register
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.message = '';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.message = action.payload.message;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.token = null;
                state.message = action.payload.message;
            })
            // register
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.message = '';
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.message = action.payload.message;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.token = null;
                state.message = action.payload.message;
            })
            // fetch data
            .addCase(fetchData.pending, (state) => {
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

export const {  logout, setData } = UserSlice.actions;

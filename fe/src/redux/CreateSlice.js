import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: '',
    token: '',
    data: [],
};

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            console.log(state.user)
            state.token = action.payload.token;
            console.log(state.token)
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    },
})

export const { login, logout, setData } = UserSlice.actions
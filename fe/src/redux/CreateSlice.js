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
            state.token = action.payload.token;
            console.log(state.token)
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    },
})

export const { login, logout } = UserSlice.actions
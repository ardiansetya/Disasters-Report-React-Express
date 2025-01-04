import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./CreateSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
    },
    devTools: true,
});

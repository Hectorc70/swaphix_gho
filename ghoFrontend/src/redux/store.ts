import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../redux/mainSlice";


export const store = configureStore({
    reducer: {
        main: mainReducer,
    },
});
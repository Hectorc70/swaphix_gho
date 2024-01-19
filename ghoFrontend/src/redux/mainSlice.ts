import { createSlice } from "@reduxjs/toolkit";


export interface MainState {
    visible: boolean;
    select: number;
    loginView: boolean;
    isBack: boolean;
}

const initialState: MainState = {
    visible: false,
    select: 0,
    loginView: false,
    isBack: true,
};


export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
    cleanMain: () => {
        return initialState;
    },
    changeVisible: (state, action) => {
        const {visible} = action.payload;

        return {...state , visible};

    },
    changeSelect: (state, action) => {
        const { select,} = action.payload;

        return {...state , select};

    },
    ChangeViewLogin: (state, action) => {
        const {loginView} = action.payload;
        return {...state , loginView};

    },
    ChangeIsBack: (state, action) => {
        const {isBack} = action.payload;
        return {...state , isBack};

    }
    },
});


export const {
    changeVisible,
    changeSelect,
    ChangeViewLogin,
    ChangeIsBack,
    cleanMain,
} = mainSlice.actions;

export default mainSlice.reducer;
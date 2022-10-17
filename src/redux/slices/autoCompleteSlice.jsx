import { createSlice } from "@reduxjs/toolkit";

export const autoCompleteSlice = createSlice({
    name: "autoComplete",
    initialState: {
        text: "",
        locations: [],
    },
    reducers: {
        getSuggestionRes: (state, action) => {
            state.locations = action.payload;
        },
        resetSuggestions: (state, action) => {
            state.text = action.payload;
            state.locations = [];
        },
        setText: (state, action) => {
            state.text = action.payload;

        },
    }
});

export const { getSuggestionRes, resetSuggestions, setText  } = autoCompleteSlice.actions;
export default autoCompleteSlice.reducer;

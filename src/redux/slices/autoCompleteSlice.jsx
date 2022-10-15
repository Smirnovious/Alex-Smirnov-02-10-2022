import { createSlice } from "@reduxjs/toolkit";

export const autoCompleteSlice = createSlice({
    name: "autoComplete",
    initialState: {
        isFetching: 0,
        text: "",
        locations: [],
    },
    reducers: {
        getSuggestionReq: (state, action) => {
            state.isFetching = state.isFetching + 1;
        },
        getSuggestionRes: (state, action) => {
            state.isFetching = state.isFetching - 1;
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

export const { getSuggestionReq, getSuggestionRes, resetSuggestions, setText  } = autoCompleteSlice.actions;
export default autoCompleteSlice.reducer;

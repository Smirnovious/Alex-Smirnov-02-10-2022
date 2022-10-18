import { createSlice } from "@reduxjs/toolkit";

export const autoCompleteSlice = createSlice({
    name: "autoComplete",
    initialState: {
        searchText: "",
        suggestedCities: [],
    },
    reducers: {
        getSuggestionRes: (state, action) => {
            state.suggestedCities = action.payload;
        },
        resetSuggestions: (state, action) => {
            state.searchText = action.payload;
            state.suggestedCities = [];
        },
        setText: (state, action) => {
            state.searchText = action.payload;

        },
    }
});

export const { getSuggestionRes, resetSuggestions, setText  } = autoCompleteSlice.actions;
export default autoCompleteSlice.reducer;

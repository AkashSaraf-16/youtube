import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
  name: "searchSuggestionsSlice",
  initialState: {},
  reducers: {
    setSuggestion: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export default searchSuggestionSlice.reducer;
export const { setSuggestion } = searchSuggestionSlice.actions;

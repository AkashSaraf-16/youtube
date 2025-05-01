import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSuggestionsSlice from "./slices/searchSuggestionsSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchSuggestions: searchSuggestionsSlice,
  },
});

export default store;

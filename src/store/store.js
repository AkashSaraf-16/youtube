import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSuggestionsSlice from "./slices/searchSuggestionsSlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchSuggestions: searchSuggestionsSlice,
    chatMessages: chatSlice,
  },
});

export default store;

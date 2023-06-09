import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer, authReducer } from "./slices/index.js";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    auth: authReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import {
  cardsReducer,
  cardDataReducer,
  favoritesReducer,
  authReducer,
} from "./slices/index.js";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    card: cardDataReducer,
    favorites: favoritesReducer,
    auth: authReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import {
  cardsReducer,
  cardDataReducer,
  favoritesReducer,
} from "./slices/index.js";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    card: cardDataReducer,
    favorites: favoritesReducer,
  },
});

export default store;

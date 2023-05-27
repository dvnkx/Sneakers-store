import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(...state, action.payload);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

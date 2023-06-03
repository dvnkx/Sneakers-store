import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";

export const fetchCards = createAsyncThunk("/cards/fetchCards", async () => {
  const { data } = await axios.get("/cards");
  return data;
});

const initialState = {
  cards: {
    items: [],
    status: "loading",
  },
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.cards.items = [];
        state.cards.status = "loading";
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards.items = action.payload;
        state.cards.status = "loaded";
      })
      .addCase(fetchCards.rejected, (state) => {
        state.cards.items = [];
        state.cards.status = "error";
      });
  },
});

export const cardsReducer = cardsSlice.reducer;

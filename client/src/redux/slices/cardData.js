import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";

export const fetchCardData = createAsyncThunk(
  "/card/fetchCardData",
  async (_id) => {
    const { data } = await axios.get(`/cards?_id=${_id}}`);
    return data.find((sneaker) => sneaker._id === _id);
  }
);

const initialState = {
  card: {
    data: {},
    status: "loading",
  },
};

const cardDataSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardData.pending, (state) => {
        state.card.data = [];
        state.card.status = "loading";
      })
      .addCase(fetchCardData.fulfilled, (state, action) => {
        state.card.data = action.payload;
        state.card.status = "loaded";
      })
      .addCase(fetchCardData.rejected, (state) => {
        state.card.data = [];
        state.card.status = "error";
      });
  },
});

export const cardDataReducer = cardDataSlice.reducer;

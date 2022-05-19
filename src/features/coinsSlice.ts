import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import ApiService from "../services/ApiService";

export const fetchCoins = createAsyncThunk("coins/coinsList", () =>
  ApiService.get(
    `/coins/markets?vs_currency=usd&page=1&sparkline=true&price_change_percentage=1h,24h,7d`
  )
    .then((response) => response.data)
    .catch((error) => error)
);

interface CoinsState {
    coins: any[];
    isLoading: boolean;
    hasErrors: boolean;
}

const initialState: CoinsState = {
  coins: [],
  isLoading: false,
  hasErrors: false
};

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCoins.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCoins.fulfilled.type]: (state, action) => {
      state.coins = action.payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    [fetchCoins.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

// export const {} = coinsSlice.actions;

export default coinsSlice.reducer;
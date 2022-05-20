import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../services/ApiService";

export const fetchCoin = createAsyncThunk(
  "coin/coinDetails",
  ({ id }: Payload) =>
    ApiService.get(`/coins/${id}`)
      .then((response) => response.data)
      .catch((error) => error)
);
export const fetchMarketData = createAsyncThunk(
  "coin/marketData",
    ({ id, days }: Payload) =>
    ApiService.get(`/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
      .then((response) => response.data)
      .catch((error) => error)
);

interface Payload {
    id: string,
    days?: number,
    cur?: string
}

interface CoinsState {
  coin: any;
  chartData: Array<Array<any>>;
  isLoading: boolean;
  hasErrors: boolean;
  isLoadingChart: boolean;
  hasErrorsChart: boolean;
}

const initialState: CoinsState = {
  coin: {},
  chartData: [],
  isLoading: false,
  hasErrors: false,
  isLoadingChart: false,
  hasErrorsChart: false,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCoin.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCoin.fulfilled.type]: (state, action) => {
      state.coin = action.payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    [fetchCoin.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
    [fetchMarketData.pending.type]: (state) => {
      state.isLoadingChart = true;
    },
    [fetchMarketData.fulfilled.type]: (state, action) => {
      state.chartData = action.payload.prices;
      state.isLoadingChart = false;
    },
    [fetchMarketData.pending.type]: (state) => {
        state.isLoadingChart = false;
        state.hasErrorsChart = true;
    },
  },
});

export default infoSlice.reducer;

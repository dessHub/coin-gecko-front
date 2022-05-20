import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "../features/coinsSlice";
import infoReducer from "../features/infoSlice"

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    info: infoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

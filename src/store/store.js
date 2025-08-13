// store.js
// Tujuan: Menggabungkan semua slice dan membuat store Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // nama 'counter' sesuai di slice
  },
});

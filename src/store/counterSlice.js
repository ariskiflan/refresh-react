// counterSlice.js
// Tujuan: Membuat state global 'counter' dengan aksi increment & decrement

//  Apa itu Redux Toolkit?
// Redux Toolkit (RTK) adalah versi modern dari Redux yang membuat penulisan state management lebih ringkas, cepat, dan mudah dibaca.
// Dulu Redux itu verbose (butuh banyak boilerplate), RTK menghilangkan itu semua.

// Kelebihan RTK:

// Syntax lebih singkat

// Menggunakan createSlice() untuk membuat reducer dan action sekaligus

// Sudah ada configureStore() (nggak perlu setup store manual)

// Mudah untuk handle async (via createAsyncThunk)

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // nama slice
  initialState: { value: 0 }, // state awal
  reducers: {
    increment: (state) => {
      state.value += 1; // mutasi state langsung (RTK pakai Immer, jadi aman)
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export actions agar bisa dipanggil di komponen
export const { increment, decrement, reset } = counterSlice.actions;

// Export reducer agar bisa dimasukkan ke store
export default counterSlice.reducer;

// createSlice() → bikin state + reducer + action sekaligus

// configureStore() → bikin store, otomatis setup Redux DevTools

// useSelector() → ambil data dari store

// useDispatch() → kirim aksi untuk ubah state

// RTK pakai Immer.js → kita bisa tulis state.value += 1 tanpa harus return state baru (immutable tetap terjaga)

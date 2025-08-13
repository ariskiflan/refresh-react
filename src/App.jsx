// App.js
// Tujuan: Mengakses dan memodifikasi state global counter

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value); // ambil state
  const dispatch = useDispatch(); // untuk memanggil action

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Tambah</button>
      <button onClick={() => dispatch(decrement())}>Kurang</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;

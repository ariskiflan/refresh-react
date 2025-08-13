// doubleCount hanya dihitung ulang kalau count berubah.
// Kalau ada state lain yang berubah, perhitungan ini tidak dijalankan ulang.

import { useState, useMemo } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);

  // Gunakan useMemo untuk menyimpan hasil perhitungan
  const doubleCount = useMemo(() => {
    console.log("🔄 Hitung ulang...");
    return count * 2; // hitung sekali lalu simpan
  }, [count]); // hanya hitung ulang kalau count berubah

  return (
    <div>
      <h2>Nilai: {count}</h2>
      <h3>Hasil x 2: {doubleCount}</h3>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default UseMemoExample;

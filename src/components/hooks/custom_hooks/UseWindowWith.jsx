// useWindowWidth.js
//  Apa itu Custom Hook di React?
// Custom Hook adalah function buatan kita yang:

// Menggunakan React Hooks di dalamnya (useState, useEffect, dll).

// Fungsinya untuk mengemas logika yang bisa dipakai ulang di banyak komponen.

// Namanya wajib diawali use supaya React tahu itu hook.

// 📚 Kenapa perlu Custom Hook?
// Misalnya Baginda punya banyak komponen yang mengambil data dari API.
// Kalau setiap komponen punya useEffect + useState sendiri, kodenya jadi berulang dan sulit di-maintain.
// Dengan Custom Hook, logika tersebut kita taruh di satu tempat → bisa dipakai di mana saja.
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup: hapus event listener saat unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width; // hook mengembalikan data
}

export default useWindowWidth;

// useWindowWidth berisi logika useState + useEffect untuk memantau ukuran layar.
// Di App, kita tinggal panggil useWindowWidth() seperti memanggil useState.
// Tidak ada duplikasi logika jika dipakai di banyak komponen.

// Apa itu Context API?
// Context API adalah fitur bawaan React untuk mengirim data ke seluruh komponen tanpa harus meneruskannya lewat props berlapis-lapis (props drilling).

// 💡 Kapan digunakan?

// Ketika banyak komponen butuh data yang sama (misalnya: tema, bahasa, user login).

// Menghindari props drilling.

// Alur Kerja Context API
// Buat Context → dengan createContext().

// Provider → membungkus komponen dan memberikan data.

// Consumer → komponen yang membaca data dari Context (pakai useContext).

import { createContext, useState } from "react";

// 1. Buat context
export const ThemeContext = createContext();

// 2. Buat provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

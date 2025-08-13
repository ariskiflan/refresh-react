import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

// Komponen yang membaca data dari Context
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Tema sekarang: {theme}
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <h1>Contoh Context API</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}

// createContext() → membuat Context.

// ThemeProvider → membungkus semua komponen yang butuh data theme.

// useContext(ThemeContext) → mengambil data dan fungsi dari Context.

// Tidak perlu props drilling → data langsung tersedia di semua komponen di dalam Provider.

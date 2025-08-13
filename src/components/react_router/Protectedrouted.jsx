// Protected Route digunakan jika ada halaman yang hanya bisa diakses ketika user login.
// Biasanya dicek dengan kondisi seperti isAuthenticated.

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function Login({ setIsAuthenticated }) {
  const login = () => {
    setIsAuthenticated(true); // simulasi login sukses
  };

  return (
    <div>
      <h2>Halaman Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

function Dashboard() {
  return <h2>Selamat Datang di Dashboard (Protected)</h2>;
}

// Komponen Protected Route
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // redirect ke login jika belum login
  }
  return children;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Route yang dilindungi */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Default */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// ProtectedRoute menerima isAuthenticated untuk mengecek status login.

// Jika belum login → diarahkan (Navigate) ke /login.

// Jika sudah login → menampilkan komponen yang diminta.

// App.jsx
// React Router – Penjelasan
// React Router adalah library yang digunakan untuk membuat navigasi di aplikasi React tanpa reload halaman (Single Page Application).

// Konsep utamanya:

// BrowserRouter → Pembungkus utama untuk mengaktifkan routing.

// Routes & Route → Menentukan daftar path dan komponen yang dirender.

// Link / NavLink → Navigasi antar halaman.

// useNavigate → Hook untuk navigasi lewat kode.

// useParams → Hook untuk mengambil parameter di URL.

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

// Halaman Home
function Home() {
  return <h2>Ini Halaman Home</h2>;
}

// Halaman About
function About() {
  return <h2>Ini Halaman About</h2>;
}

// Halaman Detail dengan parameter
function Detail() {
  const { id } = useParams(); // ambil parameter id di URL
  return <h2>Detail Item: {id}</h2>;
}

// Halaman Not Found
function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Halaman Tidak Ditemukan</h2>
      <button onClick={() => navigate("/")}>Kembali ke Home</button>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* Navigasi antar halaman */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/detail/123">Detail ID 123</Link>
      </nav>

      {/* Definisi route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
}

// :id pada /detail/:id adalah parameter URL.

// useParams() digunakan untuk mengambil nilai parameter tersebut.

// navigate() untuk berpindah halaman lewat function.

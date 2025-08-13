// App.jsx
// Tujuan: Menampilkan teks dan variabel menggunakan JSX
// JSX mirip HTML, tapi ada perbedaan aturan seperti pakai className bukan class

function App() {
  const name = "Baginda Aris"; // variabel biasa di JS

  return (
    <div>
      <h1>Hello, {name}!</h1> {/* { } untuk memasukkan JS ke dalam JSX */}
      <p>Belajar React setelah lama tidak coding.</p>
    </div>
  );
}

export default App;

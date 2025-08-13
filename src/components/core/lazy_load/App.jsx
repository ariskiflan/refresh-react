// Apa itu Lazy Loading di React?
// Lazy loading adalah teknik untuk memuat (load) suatu komponen hanya ketika dibutuhkan, bukan saat halaman pertama kali dirender.
// 💡 Manfaatnya:

// Mengurangi ukuran bundle awal (lebih cepat load halaman awal).

// Hanya load bagian yang user butuhkan.

// Di React, lazy loading biasanya dilakukan dengan:

// React.lazy(() => import("./NamaKomponen"));

import React, { lazy, Suspense, useState } from "react";

// Lazy load BigComponent
const BigComponent = lazy(() => import("./BigComponent"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Contoh Lazy Loading React</h1>
      <button onClick={() => setShow(true)}>Tampilkan Komponen Besar</button>

      {show && (
        <Suspense fallback={<p>Loading komponen...</p>}>
          <BigComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;

// lazy(() => import("./BigComponent"))

// React hanya akan mengimpor BigComponent saat komponen tersebut dipanggil.

// <Suspense fallback={...}>

// Digunakan untuk menampilkan tampilan sementara saat komponen masih dimuat.

// show && ...

// Komponen hanya dimuat saat show bernilai true (setelah tombol diklik).

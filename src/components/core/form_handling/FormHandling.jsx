// value={name} → input dikontrol oleh state.
// onChange → update state setiap user mengetik.
// onSubmit → dipanggil saat form dikirim, dengan e.preventDefault() agar tidak reload.

import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // mencegah reload halaman
    alert(`Halo, ${name}!`); // tampilkan data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama:
        <input
          type="text"
          value={name} // kontrol nilai dari state
          onChange={(e) => setName(e.target.value)} // update state setiap ketik
        />
      </label>
      <button type="submit">Kirim</button>
    </form>
  );
}

// export default SimpleForm;

// Semua input menggunakan satu state object formData.
// handleChange memanfaatkan name di input untuk update state sesuai field yang diubah.
// Cocok untuk form panjang supaya tidak membuat banyak useState.

function MultiForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // ambil nama field & nilainya
    setFormData({
      ...formData,
      [name]: value, // update sesuai field yang diketik
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // kirim ke API atau proses lain
    alert(`Nama: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nama"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Kirim</button>
    </form>
  );
}

export default MultiForm;

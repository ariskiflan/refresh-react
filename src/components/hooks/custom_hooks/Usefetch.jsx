// useFetch.js
// Custom Hook = fungsi untuk membungkus logika yang bisa dipakai ulang.
// Harus diawali use....
// Bisa menerima parameter dan mengembalikan data/fungsi.
// Membantu menghindari code duplication dan membuat kode lebih rapi.

import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]); // refetch jika url berubah

  return { data, loading };
}

export default useFetch;

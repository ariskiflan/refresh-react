// Karena text tidak berubah, Child tidak dirender ulang meski count bertambah.
// React.memo berguna untuk mencegah render ulang yang tidak perlu.

import React, { useState, memo } from "react";

// Komponen anak
const Child = memo(function Child({ text }) {
  console.log("Render Child");
  return <h3>{text}</h3>;
});

function MemoExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child text="Halo Baginda Aris" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default MemoExample;

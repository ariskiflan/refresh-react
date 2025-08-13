import { useState } from "react";

function Counter() {
  // useState: membuat state (nilai yang bisa berubah & trigger re-render)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Jumlah klik: {count}</p>
      {/* onClick: event handler */}
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
    </div>
  );
}

export default Counter;

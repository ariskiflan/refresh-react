import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // useEffect: dijalankan saat render atau update
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup function (agar tidak double interval)
    return () => clearInterval(interval);
  }, []); // [] artinya hanya dijalankan sekali saat mount

  return <h2>Waktu: {seconds} detik</h2>;
}

export default Timer;

import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // akses langsung DOM element
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Ketik sesuatu..." />
      <button onClick={focusInput}>Fokuskan Input</button>
    </div>
  );
}

export default FocusInput;

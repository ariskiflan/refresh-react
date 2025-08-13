// App.jsx
import useWindowWidth from "./useWindowWidth";

function Parent() {
  const width = useWindowWidth(); // pakai custom hook

  return (
    <div>
      <h1>Lebar layar: {width}px</h1>
      {width < 600 ? <p>Mode Mobile</p> : <p>Mode Desktop</p>}
    </div>
  );
}

export default Parent;

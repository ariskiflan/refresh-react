import Child from "./Child";
function App() {
  return (
    <div>
      {/* Kirim data ke component Child melalui props */}
      <Child name="Baginda Aris" />
      <Child name="Programmer React" />
    </div>
  );
}

export default App;

import { createContext, useContext, useState } from "react";

// 1. Buat Context
const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Baginda Aris");

  return (
    // 2. Provider membungkus komponen lain
    <UserContext.Provider value={user}>
      <Navbar />
      <Profile />
    </UserContext.Provider>
  );
}

function Navbar() {
  const user = useContext(UserContext); // Ambil data dari context
  return <h2>Navbar - Selamat datang, {user}</h2>;
}

function Profile() {
  const user = useContext(UserContext);
  return <p>Profil milik {user}</p>;
}

export default App;

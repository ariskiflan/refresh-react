function TodoList() {
  const todos = ["Belajar React", "Makan", "Tidur"];

  return (
    <ul>
      {/* Gunakan .map() untuk menampilkan array */}
      {todos.map((item, index) => (
        <li key={index}>{item}</li> // key penting untuk optimisasi
      ))}
    </ul>
  );
}

export default TodoList;

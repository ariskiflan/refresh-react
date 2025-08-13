// App.jsx
import useFetch from "./Usefetch";
function App() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;

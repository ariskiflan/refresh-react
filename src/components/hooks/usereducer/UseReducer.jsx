import { useReducer } from "react";

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case "tambah":
      return { count: state.count + 1 };
    case "kurang":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "tambah" })}>Tambah</button>
      <button onClick={() => dispatch({ type: "kurang" })}>Kurang</button>
    </div>
  );
}

export default CounterReducer;

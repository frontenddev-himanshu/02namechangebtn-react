import { useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState(0);

  let add = () => {
    if (first < 10) {
      setFirst(first + 1);
    }
  };

  let sub = () => {
    if (first > 0) {
      setFirst(first - 1);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="head">Increment Decrement {first}</h1>

        <button className="btn" onClick={add}>
          Click to add+
        </button>

        <button className="btn" onClick={sub}>
          Click to sub-
        </button>
      </div>
    </>
  );
}

export default App;

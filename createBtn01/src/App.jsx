import { useState } from "react";

function App() {
  let [chane, setChane] = useState("Arena");

  let change = () => {
    if (chane === "Arena") {
      setChane("Arena Animation Multimedia");
    } else {
      setChane("Arena");
    }
  };

  return (
    <>
      <h1 className="head">My Institute Name Is {chane}</h1>

      <button className="btn" onClick={change}>
        Click To Change
      </button>
    </>
  );
}

export default App;

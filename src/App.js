import React from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [error, setError] = React.useState(false);

  const onIncrement = () => {
    // setCounter(counter + 1)
    // setCounter((prev) => {
    //   return prev + 1;
    // });
    if (counter < 10) {
      setCounter((prev) => prev + 1);
    } else {
      setError(true);
    }
  };

  const onDecrement = () => {
    // setCounter(counter + 1)
    // setCounter((prev) => {
    //   return prev + 1;
    // });
    setError(false); // reset error
    if (counter > 0) setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <header
        style={{ textAlign: "center", height: "10vh", backgroundColor: "#ccc",

      }}
      >
        <h1>Counter App</h1>
      </header>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <p style={{ fontSize: 50 }}>{counter}</p>

        {error && (
          <p style={{ fontSize: 20, color: "red" }}>Value should be 0 to 10</p>
        )}

        <div style={{ marginTop: 50 }}>
          <button
            style={{ padding: "10px 15px", marginRight: 5 }}
            onClick={() => {
              // onIncrement();
              setCounter(s => s +1)
            }}
            // onClick={onIncrement}
          >
            Increment
          </button>
          <button
            style={{ padding: "10px 15px", marginLeft: 5 }}
            onClick={onDecrement}
          >
            Decrement
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;

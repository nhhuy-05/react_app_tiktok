import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const handleDecrease = () => {
    setCounter(counter - 1);
  }
  const handleIncrease = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <button onClick={handleDecrease}>Decrement 1</button>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrease} >Increment 1</button>

    </div>
  );
}

export default App;

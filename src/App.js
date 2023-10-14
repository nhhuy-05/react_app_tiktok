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
      <button onClick={handleDecrease}>Decrement</button>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrease} >Increment</button>

    </div>
  );
}

export default App;

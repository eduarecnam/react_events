import { useState } from "react";

const App = () => {
  // state for the counter
  const [count, setCount] = useState(0);
  //updating state by passing a value (may cause stale state issues)
  const incrementWithValue = () => {
    setCount(count + 1);
    // may not work as expected due to stale state
    setCount(count + 1); 
  }
  //Updatingg state by passing a function (always gets the latest state)
  const incrementWithFunction = () => {
    setCount(prev => prev + 1);
    //correctly updates twice
    setCount(prev => prev + 1);
    //will get the old state of value of count as this value is captured when the function is defined
    console.log(count);
  }
  return (
      <div style={{textAlign: "center", marginTop: "50px"}}>
        <h1>Counter: {count}</h1>
        <button
          onClick={incrementWithValue}
          style={{ margin: "5px", padding: "10px"}}
        >
          Increment (using value)
        </button>

        <button
          onClick={incrementWithFunction}
          style={{ margin: "5px", padding: "10px"}}
        >
          Increment (using function)
        </button>
      </div>
    );
};


export default App;

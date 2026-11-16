import { useState } from 'react'
const handleClick = () => console.log("Button clicked!");
let count = 0;
const handleIncrement = () => {
  count++;
  console.log(count);
}
const App = () => {
  return (
    <>
      <button onClick={handleClick}>
          Click me
      </button>
      <button onClick={handleIncrement}>
          Increment
      </button>
    </>
    );
}
 export default App;

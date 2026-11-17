import { useState } from "react"

const Counter = () => {
    //state variable
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("black");
    const increment = () => {
        const newCount = count + 1;
        //update state, trigger re-render
        setCount(newCount);
        //change color based on count value
        if (newCount % 2 === 0){
            setColor("blue");
        }else{
            setColor("red");
        }
        //log the new value of count
        console.log("Count:", newCount);
    };
    return (  
        <div>
            <h2 style={{ color }}> Counter: {count} </h2>
            <button onClick={increment}> Increment </button>
        </div>
    );
}
 
export default Counter;
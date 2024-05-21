import { useState, useRef } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  const handleClick = () => {
    // setCounter(counter + 1);
    counterRef.current++;

    console.log("ref", counterRef.current);
    // console.log("state", counter);
  };

  return (
    <div className="counter-container">
      <h2>Count: {counterRef.current}</h2>
      <button onClick={() => handleClick()}>Increment</button>
    </div>
  );
};

export default Counter;

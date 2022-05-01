import React, { useState } from "react";
const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleDiss = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <div className="container">
        <div className="count">
          <h2 className="text">{counter}</h2>
        </div>
        <div>
          <button onClick={handleDiss}>-</button>
          <button onClick={handleReset}>O</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </>
  );
};

export default CounterApp;

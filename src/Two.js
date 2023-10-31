import React, { useState } from "react";

const Two = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    if(count>0){
    setCount(count - 1);
    }
  };
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={handleInc}>+ </button>
      <button onClick={handleDec}>- </button>
    </div>
  );
};

export default Two;

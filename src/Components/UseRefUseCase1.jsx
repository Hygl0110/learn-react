import React, { useRef, useState } from "react";

const UseRefUseCase1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State: ", count);
    console.log("useRef1: ", countRef.current);
  };

  return (
    <div className="turotial">
      Count : {count}
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
};

export default UseRefUseCase1;

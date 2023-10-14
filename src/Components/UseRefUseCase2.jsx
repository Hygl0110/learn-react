import React, { useRef } from "react";

const UseRefUseCase2 = () => {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Typie something..." />
    </div>
  );
};

export default UseRefUseCase2;

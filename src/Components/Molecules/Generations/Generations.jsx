import React from "react";

export const Generations = (props) => {
  const generations = props.generations;
  return (
    <>
      <h2>Generation Names:</h2>
      <ul>
        {generations.map((generation, index) => (
          <li key={index}>{generation.name}</li>
        ))}
      </ul>
    </>
  );
};

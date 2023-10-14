import React, { useState } from "react";
import { OnePLaceForm } from "../../Components/Molecules/OnePlaceForm/OnePLaceForm";

export const PokeConsult = () => {
  const [pokemon, setPokemon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pokemon);
  };

  return (
    <div className="pokeConsult">
      <>
        <header>
          <h1>Learn React</h1>
        </header>
      </>
      <>
        <main>
          <OnePLaceForm
            onSubmit={handleSubmit}
            onChangeText={(e) => setPokemon(e.target.value)}
          />
        </main>
      </>
    </div>
  );
};

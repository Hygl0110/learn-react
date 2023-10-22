import { useEffect, useMemo, useState } from "react";
import Form from "../../Molecules/Form/Form";
import { Generations } from "../../Molecules/Generations/Generations";
import Pokemon from "../../Molecules/Pokemon/Pokemon";
import "./Main.css";

const Main = () => {
  //useState:
  const [generations, setGenerations] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const [pokemon, setPokemon] = useState({
    types: [],
    height: "",
    name: "",
    sprites: { front_default: "" },
  });

  //Funcion pokeFetch
  const pokeFetch = (apiUrl) => {
    return fetch(apiUrl).then((response) => {
      if (!response.ok) {
        throw new Error(`No funciona :C, error: ${response.status}`);
      }
      return response.json();
    });
  };

  //Generations Fetch y set Genetations
  useEffect(() => {
    pokeFetch(`https://pokeapi.co/api/v2/generation`)
      //setGenerations
      .then((data) => setGenerations(data.results));
  }, []);

  /* PokeName Change y set
  quitar espacios en los extremos y poner en minuscula 
  porque la api solo responde a nombres en minusculas */
  const handleChangeForm = (e) => {
    const newPokeName = e.target.value.toLowerCase().trim();
    setPokeName(newPokeName);
  };

  //fetch Pokemon y setPokemon
  const handleSubmit = (e) => {
    e.preventDefault();
    pokeFetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      //setPokemon
      .then((data) => setPokemon(data))
      .catch(() => {
        alert("valor no encontrado en la pokeApi");
      });
  };

  return (
    <>
      <main>
        <Form onChange={handleChangeForm} onSubmit={handleSubmit} />
        <div>{pokeName}</div>
        <Generations generations={generations} />
        <Pokemon
          pokemonName={pokemon.name}
          pokemonImg={pokemon.sprites.front_default}
          pokemonHeight={pokemon.height / 10 + " m"}
          pokemonTypes={pokemon.types}
        />
      </main>
    </>
  );
};

export default Main;

import "./Pokemon.css";

const Pokemon = (props) => {
  const types = props.pokemonTypes;
  return (
    <>
      <div className="pokemon">
        <h3>Resultado: </h3>
        <h3>{props.pokemonName}</h3>
        <img
          src={props.pokemonImg}
          alt={props.pokemonName}
          title={props.pokemonName}
        />
        <p>Altura: {props.pokemonHeight}</p>
        <>
          Tipos:
          <ul>
            {types.map((type, index) => (
              <li>{type.type.name}</li>
            ))}
          </ul>
        </>
      </div>
    </>
  );
};

export default Pokemon;

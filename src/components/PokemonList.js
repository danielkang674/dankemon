import Spinner from "./Spinner.js";

function PokemonList({ isLoading, pokemons }) {
  if (isLoading) {
    return <Spinner />;
  } else if (pokemons.ok) {
    return (
      <ul>
        {pokemons.pokemonSpecies.map((pokemon, index) => (
          <li key={index.toString()}>
            <a
              href={pokemon.url}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {pokemon.name}
            </a>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <>
        <p>{pokemons.message}</p>
        <p>Unable to return any Pokemon</p>
      </>
    );
  }
}

export default PokemonList;

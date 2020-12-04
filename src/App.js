import { useState } from "react";
import "./App.css";
import PokemonSearch from "./components/PokemonSearch.js";
import PokemonList from "./components/PokemonList.js";
import { searchByHabitat } from "./services/PokemonService.js";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [pokemons, setPokemon] = useState({ ok: true, pokemonSpecies: [] });
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const pokemons = await searchByHabitat(searchInput.toLowerCase());
    setPokemon(pokemons);
    setIsLoading(false);
  }

  return (
    <div className="container">
      <h1>Welcome to Pokemon Finder</h1>
      <PokemonSearch
        handleSearchInput={handleSearchInput}
        handleSubmit={handleSubmit}
      />
      <div className="list-container">
        <PokemonList pokemons={pokemons} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;

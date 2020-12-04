function PokemonSearch(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        <p>Search for Pokemon by habitat name or ID</p>
        <input
          className="search-bar"
          placeholder="For example: cave"
          value={props.searchInput}
          onChange={props.handleSearchInput}
        ></input>
      </label>
      <button type="submit" value="Submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default PokemonSearch;

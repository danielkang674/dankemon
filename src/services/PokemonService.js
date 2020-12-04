export async function searchByHabitat(searchInput) {
  try {
    const request = await fetch(
      `https://pokeapi.co/api/v2/pokemon-habitat/${searchInput}/`
    );
    if (request.ok) {
      const data = await request.json();
      return { ok: true, pokemonSpecies: data.pokemon_species };
    } else {
      const message = await request.text();
      return { ok: false, message };
    }
  } catch (error) {
    return { ok: false, message: "OOPS something errored!" };
  }
}

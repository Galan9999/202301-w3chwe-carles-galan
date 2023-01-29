import type { PokemonInfoStructure } from "../types";
const urlApi = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonInfo = async (id: number) => {
  const allPokemons = [];

  for (let pokemonId = 1; pokemonId <= 10; pokemonId++) {
    const id = pokemonId;
    const getPokemonData = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    allPokemons.push(getPokemonData);
  }

  const unresolvedPromises = await Promise.all(allPokemons);
  const pokemonInfo = unresolvedPromises.map(async (unresolvedPromise) =>
    unresolvedPromise.json()
  );

  const finalPokemonInfo = (await Promise.all(
    pokemonInfo
  )) as PokemonInfoStructure[];

  return finalPokemonInfo;
};

export default getPokemonInfo;

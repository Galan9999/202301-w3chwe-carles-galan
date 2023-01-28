import type { PokemonDataStructure } from "../components/types";

export const getPokemonList = async (url: string): Promise<any[]> => {
  const response = await fetch(url);
  const pokemons = (await response.json()) as PokemonDataStructure;

  const pokemonList = pokemons.results;
  return pokemonList;
};

import type { PokemonDataStructure } from "../components/types";

export const getPokemonList = async (
  url: string
): Promise<PokemonDataStructure> => {
  const response = await fetch(url);
  const pokemonsList = (await response.json()) as PokemonDataStructure;

  return pokemonsList;
};

import { getPokemonList } from "./getPokemonList/getPokemonList.js";

const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";

const allPokemonNames = getPokemonList(url);

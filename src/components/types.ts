import type { PokemonInfoStructure } from "../PokemonInfo/types.js";

export interface ComponentStructure {
  element: Element;
  render: () => void;
  addListeners?: () => void;
}

export interface CardComponentStructure {
  pokemon: PokemonInfoStructure;
}

import type { PokemonInfoStructure } from "../PokemonInfo/types";

export interface ComponentStructure {
  element: Element;
  render: () => void;
  addListeners?: () => void;
}

export interface CardComponentStructure {
  pokemon: PokemonInfoStructure;
}

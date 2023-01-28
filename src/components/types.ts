export interface ComponentStructure {
  element: Element;
  render: () => void;
  addListeners?: () => void;
}

export interface PokemonDataStructure {
  count: number;
  next: string;
  results: PokemonInfo[];
}

export interface PokemonInfo {
  name: string;
  url: string;
}

export interface ComponentStructure {
  domElement: Element;
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

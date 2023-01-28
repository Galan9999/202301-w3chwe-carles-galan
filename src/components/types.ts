export interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export interface PokemonDataStructure {
  results: PokemonInfo[];
}

export interface PokemonInfo {
  name: string;
  url: string;
}

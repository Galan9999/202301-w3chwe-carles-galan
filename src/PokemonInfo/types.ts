export interface PokemonInfoStructure {
  name: string;
  id: number;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  sprites: {
    other: {
      "official-artwork": {
        front_shiny: string;
      };
    };
  };
}

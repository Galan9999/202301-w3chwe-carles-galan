import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { getPokemonList } from "./getPokemonList/getPokemonList.js";

const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";

const pokemonsList = getPokemonList(url);

const root = document.querySelector(".root");
const headerComponent = new HeaderComponent(root);
headerComponent.render();

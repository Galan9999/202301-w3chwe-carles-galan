import CardComponent from "./components/CardComponent/CardComponent.js";
import Component from "./components/Component/Component.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import getPokemonInfo from "./PokemonInfo/getPokemonInfo/getPokemnInfo.js";

const pokemonInfo = getPokemonInfo;

const root = document.querySelector(".root");
const headerComponent = new HeaderComponent(root);
headerComponent.render();

const container = new Component(root, "div", "container");
container.render();

const section = new Component(
  container.element,
  "section",
  "pokemon_card-container"
);
section.render();

const pokemonList = new Component(section.element, "ul", "pokemon-list");
pokemonList.render();

(async () => {
  const allPokemonInfo = await getPokemonInfo(10);

  allPokemonInfo.map((pokemon) => {
    const card = new CardComponent(pokemonList.element, pokemon);
    return card;
  });
})();

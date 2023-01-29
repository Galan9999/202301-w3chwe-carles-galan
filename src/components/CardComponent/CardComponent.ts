import Component from "../Component/Component.js";
import type { CardComponentStructure } from "../types.js";
import type { PokemonInfoStructure } from "../../PokemonInfo/types.js";

class CardComponent extends Component implements CardComponentStructure {
  pokemon: PokemonInfoStructure;
  constructor(parentElement: Element, pokemon: PokemonInfoStructure) {
    super(parentElement, "card", "li");
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    super.render();

    this.element.innerHTML = `<div class=card__image><img class=card-image alt="${this.pokemon.name}" width=150 heigth=150 src="${this.pokemon.sprites.other["official-artwork"].front_shiny}"></div>
    <div class=card__information>
    <h3>${this.pokemon.name}</h3>
      <ul class= card-information__list>
        <li>Nº${this.pokemon.id}</li>
        <li>${this.pokemon.weight}lb</li>
        <li>${this.pokemon.height}inch</li>
                <li>Type: ${this.pokemon.types[0].type.name}</li>   
      </ul>
    </div>`;
    return this.element.innerHTML;
  }
}
export default CardComponent;

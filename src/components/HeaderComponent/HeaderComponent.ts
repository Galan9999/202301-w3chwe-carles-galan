import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokedex-header", "header");
  }

  render() {
    super.render();
    this.element.innerHTML = `<img class="logo" src='pokemon-logo.svg' alt="pokemon logo" height="100" width="200"'>;
    <nav class="crumbs">
    <ul>
        <li class="crumb"><a href="#">prev</a></li>
        <li class="crumb"><a href="#">next</a></li>
    </ul>`;
  }
}

export default HeaderComponent;

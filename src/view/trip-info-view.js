import { createElement } from '../render.js';

function createInfoTemplate() {
  return (
    `<section class="trip-main__trip-info  trip-info"">
     <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
    </div>
    <p class="trip-info__cost"> Total: &euro;&nbsp;<span class="trip-infocost-value">1230</span> </p>
    </section>`
  );
}

export default class InfoView {

  #element = null;

  get template() {
    return createInfoTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
import {createElement} from '../render.js';

function createPointTemplate(point) {
  const { basePrice, dateFrom, dateTo, destination, offers, type } = point;
  point.offers = offers.id;
  point.destination = destination.id;

  return (
    `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">MAR 18</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${point.destination.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateFrom}">10:30</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dateTo}">11:00</time>
                  </p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  <li class="event__offer">
                    <span class="event__offer-title">${point.offers.title}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${point.offers.price}</span>
                  </li>
                </ul>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`
  );
}

export default class PointView {
  getTemplate() {
    return createPointTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

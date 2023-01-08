import {createElement} from '../render.js';
import { offersList } from '../mock/offer.js';
import { destinationsList } from '../mock/destination.js';
import { humanizePointDueDate } from '../util.js';
import { humanizePointDueTime } from '../util.js';
import { subtractDates } from '../util.js';


const createDestinationsTemplate = (availableDestinations, destination) => {
  const destinationItem = availableDestinations.find((destinationPoint) => destinationPoint.id === destination);
  return `${destinationItem.name} `;
};

const createOffersTemplate = (availableOffers, offers) => offers.map((offer) => {
  const offerItem = availableOffers.find((offerPoint) => offerPoint.id === offer);
  return `<li class="event__offer">
            <span class="event__offer-title">${offerItem.title}</span>
             &plus;&euro;&nbsp;
            <span class="event__offer-price">${offerItem.price}</span>
            </li>`;
});

function createPointTemplate(point) {
  const { basePrice, dateFrom, dateTo, destination, offers, type } = point;
  const dueTimeFrom = humanizePointDueTime(dateFrom);
  const dueTimeTo = humanizePointDueTime(dateTo);
  const dueDate = humanizePointDueDate(dateFrom);
  const durTime = subtractDates(dateFrom, dateTo);

  return (
    `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${dateFrom}">${dueDate}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event ${type} icon">
                </div>
                <h3 class="event__title">${type} ${createDestinationsTemplate(destinationsList, destination)}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateFrom}">${dueTimeFrom}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dateTo}">${dueTimeTo}</time>
                  </p>
                  <p class="event__duration">${durTime}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">

                    ${createOffersTemplate(offersList, offers)}

                </ul>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`
  );
}

export default class PointView {
  constructor(point) {
    this.point = point;
  }

  getTemplate() {
    return createPointTemplate(this.point);
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

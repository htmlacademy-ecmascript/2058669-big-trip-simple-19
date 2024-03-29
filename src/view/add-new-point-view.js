import AbstractView from '../framework/view/abstract-view.js';
import { offersList } from '../mock/offer.js';
import { destinationsList } from '../mock/destination.js';
import { humanizePointDueDatePoint } from '../utils/point.js';
import { TYPES } from '../const.js';

const createOffersTemplate = (availableOffers, offers) => availableOffers.map((offer) => {
  const isChecked = offers.includes(offer.id) ? 'checked' : '';
  return `  <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${offer.id}" type="checkbox" name="event-offer-luggage" ${isChecked}>
              <label class="event__offer-label" for="event-offer-luggage-${offer.id}">
                <span class="event__offer-title">${offer.title}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${offer.price}</span>
              </label>
            </div>
           `;
}).join('');

const createOfferTypesTemplate = (typesList, type) => typesList.map((typeInPoint) => {
  const isChecked = type === typeInPoint ? 'checked' : '';
  const upperLetterType = typeInPoint[0].toUpperCase() + typeInPoint.slice(1);
  return `  <div class="event__type-item">
                <input id="event-type-${typeInPoint}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${typeInPoint}" ${isChecked}>
                <label class="event__type-label  event__type-label--${typeInPoint}" for="event-type-${typeInPoint}-1">${upperLetterType}</label>
              </div>
           `;
}).join('');

const createDestinationsTemplate = (availableDestinations, destination, type) => {
  const destinationOptions = availableDestinations.map((destinationPoint) => `<option value="${destinationPoint.name}"></option>`).join('');
  const destinationItem = availableDestinations.find((destinationPoint) => destinationPoint.id === destination);
  return `<div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text"
          name="event-destination" value="${destinationItem.name}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${destinationOptions}
          </datalist>
        </div>
           `;
};

const createDestinationsDescriptionPhotosTemplate = (availableDestinations, destination) => {
  const destinationItem = availableDestinations.find((destinationPoint) => destinationPoint.id === destination);
  const arrayPictures = destinationItem.pictures;
  const destinationPhoto = arrayPictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`).join('');
  return `<section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${destinationItem.description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
              ${destinationPhoto}
            </div>
          </div>
        </section>
        `;
};


function createAddNewPointTemplate(point) {
  const {basePrice, dateFrom, dateTo, destination, offers, type} = point;
  const dateTimePointFrom = humanizePointDueDatePoint(dateFrom);
  const dateTimePointTo = humanizePointDueDatePoint(dateTo);
  return (`
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              ${createOfferTypesTemplate(TYPES, type)}

            </fieldset>
          </div>
        </div>

        ${createDestinationsTemplate(destinationsList, destination, type)}

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateTimePointFrom}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateTimePointTo}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
          ${createOffersTemplate(offersList, offers)}
          </div>
        </section>

          ${createDestinationsDescriptionPhotosTemplate(destinationsList, destination)}
      </section>
    </form>
  </li>`
  );
}

export default class AddNewPointView extends AbstractView {
  #point = null;
  #handleFormSubmit = null;
  #handleFormCancel = null;

  constructor({point, onFormSubmit, onFormCancel}) {
    super();
    this.#point = point;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormCancel = onFormCancel;

    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this.#formCancelHandler);
  }

  get template() {
    return createAddNewPointTemplate(this.#point);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };

  #formCancelHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormCancel();
  };
}

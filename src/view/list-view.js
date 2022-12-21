import {createElement} from '../render.js';
import {humanizePointDueTime} from '../util.js';
import {humanizePointDueDate} from '../util.js';

function createListTemplate(point) {
  const {type, basePrice, dueTime, dueDate, destination} = point;
  const hourMinute = humanizePointDueTime(dueTime);
  const date = humanizePointDueDate(dueDate);
  return (`<ul class="trip-events__list">
  <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">${date}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">${hourMinute}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${hourMinute}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
    </div>
  </li>
</ul>`
  );
}

export default class ListView {
  getTemplate() {
    return createListTemplate();
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

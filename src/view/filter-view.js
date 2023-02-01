import AbstractView from '../framework/view/abstract-view.js';

function createFilterItemTemplate(filter) {
  const { name, count, currentFilterType } = filter;

  return (
    `<div class="trip-filters__filter">
      <input id="filter-${name}"
      class="trip-filters__filter-input  visually-hidden"
      type="radio"
      name="trip-filter"
      value="${name}"
      ${name === currentFilterType ? 'checked' : ''}
      ${count === 0 ? 'disabled' : ''}>
      <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
    </div>`
  );
}

function createFilterTemplate(filterItems) {
  console.log(filterItems);
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter))
    .join('');

  return (
    `<form class="trip-filters" action="#" method="get">
        ${filterItemsTemplate}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>`
  );
}
export default class FilterView extends AbstractView {
  #filters = null;

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterTemplate(this.#filters);
  }
}

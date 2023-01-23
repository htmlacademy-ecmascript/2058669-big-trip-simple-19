import FilterView from '../view/filter-view';
import { render, replace } from '../framework/render.js';
import { FilterType } from '../const';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #filterComponent = null;

  constructor(filterContainer, filterModel) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
  }

  get filters() {
    return [
      {
        type: FilterType.EVERYTHING,
        name: 'EVERYTHING',
        count: FilterType.EVERYTHING.length,

      },
      {
        type: FilterType.FUTURE,
        name: 'FUTURE',
        count: FilterType.FUTURE.length,
      },
      {
        type: FilterType.PAST,
        name: 'PAST',
        count: FilterType.PAST.length,
      },
      {
        type: FilterType.PRESENT,
        name: 'PRESENT',
        count: FilterType.PRESENT.length,
      }
    ];
  }

  init = () => {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView(filters, this.#filterModel.filter);


    if (prevFilterComponent === null) {
      render(this.#filterContainer, this.#filterComponent);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);

  };
}

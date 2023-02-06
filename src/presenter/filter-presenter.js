import FilterView from '../view/filter-view';
import { render } from '../framework/render.js';
import { FilterType } from '../const';
import { filter } from '../utils/filter';
//import { generateFilter } from '../mock/filter.js';


export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #pointsModel = null;
  #filterComponent = null;

  constructor({filterContainer, filterModel, pointsModel}) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#pointsModel = pointsModel;
  }

  get filters() {
    const pointsFilter = this.#pointsModel.points;
    return [
      {
        type: FilterType.EVERYTHING,
        name: 'EVERYTHING',
        count: filter[FilterType.EVERYTHING](pointsFilter).length,

      },
      {
        type: FilterType.FUTURE,
        name: 'FUTURE',
        count: filter[FilterType.FUTURE](pointsFilter).length,
      },
      {
        type: FilterType.PAST,
        name: 'PAST',
        count: filter[FilterType.PAST](pointsFilter).length,
      },
      {
        type: FilterType.PRESENT,
        name: 'PRESENT',
        count: filter[FilterType.PRESENT](pointsFilter).length,
      }
    ];
  }

  init = () => {
    const filters = this.filters;
    console.log(this.#filterModel.filter);
    console.log(filters);
    this.#filterComponent = new FilterView(this.#filterModel.filter, filters);
    render(this.#filterComponent, this.#filterContainer);
  };

}


import { FilterType } from '../const';

export default class FilterModel {
  #filter = FilterType.EVERYTHING;

  get filter() {
    return this.#filter;
  }
}

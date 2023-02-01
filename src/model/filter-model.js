import { FilterType } from '../const';
import AbstractView from '../framework/view/abstract-view.js';

export default class FilterModel extends AbstractView {
  #filter = FilterType.EVERYTHING;

  get filter() {
    return this.#filter;
  }
}

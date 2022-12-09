//import LoandingView from '../view/loading-view.js';
//import EditPointView from '../view/edit-point-view.js';
//import ListFilterView from '../view/list-filter-view.js';
//import EmptyView from '../view/list-empty-view.js';
//import ListSortView from '../view/list-sort-view.js';
//import AddNewPointWithoutOffersView from '../view/add-new-point-without-offers-view.js';
//import AddNewPointWithoutDestinationsView from '../view/add-new-point-without-destination-view.js';
import ListView from '../view/list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new AddNewPointView();
  ListComponent = new ListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
  }
}


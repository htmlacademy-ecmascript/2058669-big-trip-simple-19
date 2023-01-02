import ListView from '../view/list-view.js';
import PointView from '../view/point-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import {render} from '../render.js';
export default class TripPresenter {
  #listContainer = new ListView();
  constructor({ tripContainer, pointsModel }) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }

  init() {

    this.tripPoints = [...this.pointsModel.getPoints()];

    render(this.#listContainer, this.tripContainer);
    render(new AddNewPointView(this.tripPoints[1]), this.#listContainer.getElement());

    for (let i = 0; i < this.tripPoints.length; i++) {
      render(new PointView(this.tripPoints[i]), this.#listContainer.getElement());
    }
  }
}

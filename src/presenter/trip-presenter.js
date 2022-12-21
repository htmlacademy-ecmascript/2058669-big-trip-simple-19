import ListView from '../view/list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import {render} from '../render.js';

export default class TripPresenter {

  constructor({tripContainer, pointsModel}) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.tripPoints = [...this.pointsModel.getPoints()];

    render(this.tripComponent, this.tripContainer);

    for (let i = 0; i < this.tripPoints.length; i++) {
      render(new ListView({point: this.tripPoints[i]}), this.tripComponent.getElement());
    }
  }

  tripComponent = new AddNewPointView();
}


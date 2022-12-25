import ListView from '../view/list-view.js';
import PointView from '../view/point-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import {render} from '../render.js';

export default class TripPresenter {

  constructor({tripContainer, pointsModel}) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.tripPoints = [...this.pointsModel.getPoints()];

    render(new ListView(), this.tripContainer);
    render(new AddNewPointView(this.tripPoints[1]), this.tripContainer);

    for (let i = 0; i < this.tripPoints.length; i++) {
      render(new PointView(this.tripPoints[i]), this.tripContainer);
    }
  }
}


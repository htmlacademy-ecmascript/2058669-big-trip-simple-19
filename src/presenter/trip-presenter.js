import ListView from '../view/list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import {render} from '../render.js';

export default class TripPresenter {
  tripComponent = new AddNewPointView();


  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.tripComponent, this.tripContainer);

    for (let i = 0; i < 3; i++) {
      render(new ListView(), this.tripComponent.getElement());
    }
  }
}


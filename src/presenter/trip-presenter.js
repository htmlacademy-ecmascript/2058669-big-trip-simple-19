import ListView from '../view/list-view.js';
import PointView from '../view/point-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import {render} from '../render.js';
export default class TripPresenter {
  #listContainer = new ListView();
  #tripContainer = null;
  #pointsModel = null;
  #tripPoints = [];
  constructor({ tripContainer, pointsModel }) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {

    this.#tripPoints = [...this.#pointsModel.points];

    render(this.#listContainer, this.#tripContainer);
    //render(new AddNewPointView(this.#tripPoints[1]), this.#listContainer.element);

    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i]);
      //render(new PointView(this.#tripPoints[i]), this.#listContainer.element);
    }
  }

  #renderPoint(point) {
    const listComponent = new PointView({ point });
    const listEditComponent = new AddNewPointView({point});

    const replaceElementToForm = () => {
      this.#listContainer.element.replaceChild(listEditComponent.element, listComponent.element);
    };
    const replaceFormToElement = () => {
      this.#listContainer.element.replaceChild(listComponent.element, listEditComponent.element);
    };

    listComponent.element.querySelector('.trip-events__item').addEventListener('click', () => {
      replaceElementToForm();
    });

    listEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToElement();
    });

    render(listComponent, this.#listContainer.element);
  }
}

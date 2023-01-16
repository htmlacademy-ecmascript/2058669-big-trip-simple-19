import ListView from '../view/list-view.js';
import PointView from '../view/point-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import EmptyView from '../view/list-empty-view.js';
import { render } from '../render.js';
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

    if (this.#tripPoints.length === 0) {
      render(new EmptyView(), this.#tripContainer);
    } else {

      render(this.#listContainer, this.#tripContainer);

      for (let i = 0; i < this.#tripPoints.length; i++) {
        this.#renderPoint(this.#tripPoints[i]);
      }
    }
  }

  #renderPoint(point) {
    const listComponent = new PointView(point);
    const listEditComponent = new AddNewPointView(point);

    const replaceElementToForm = () => {
      this.#listContainer.element.replaceChild(listEditComponent.element, listComponent.element);
    };
    const replaceFormToElement = () => {
      this.#listContainer.element.replaceChild(listComponent.element, listEditComponent.element);
    };
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToElement();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };
    listComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceElementToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    listEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToElement();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    listEditComponent.element.querySelector('.event__reset-btn').addEventListener('click', () => {
      replaceFormToElement();
    });

    render(listComponent, this.#listContainer.element);
  }
}

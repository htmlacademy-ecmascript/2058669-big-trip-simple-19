import ListView from '../view/list-view.js';
import PointView from '../view/point-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import EmptyView from '../view/list-empty-view.js';
import { render, replace } from '../framework/render.js';
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

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToElement.call(this);
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };
    const listComponent = new PointView({
      point,
      onEditClick: () => {
        replaceElementToForm.call(this);
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const listEditComponent = new AddNewPointView({
      point,
      onFormSubmit: () => {
        replaceFormToElement.call(this);
        document.addEventListener('keydown', escKeyDownHandler);
      },
      onFormCancel: () => {
        replaceFormToElement.call(this);
      }
    });

    function replaceElementToForm(){
      replace(listEditComponent, listComponent);
    }

    function replaceFormToElement(){
      replace(listComponent, listEditComponent);
    }

    render(listComponent, this.#listContainer.element);
  }
}

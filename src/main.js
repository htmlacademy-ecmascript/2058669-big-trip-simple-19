import InfoView from './view/trip-info-view.js';
import SortView from './view/sort-view.js';
import { render } from './framework/render.js';
import TripPresenter from './presenter/trip-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';

const siteInfoElement = document.querySelector('.trip-info');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter({
  filterContainer: siteFilterElement,
  filterModel, pointsModel
});
const tripPresenter = new TripPresenter({
  tripContainer: siteMainElement,
  pointsModel
});

render(new InfoView(), siteInfoElement);
render(new SortView(), siteMainElement);

filterPresenter.init();
tripPresenter.init();

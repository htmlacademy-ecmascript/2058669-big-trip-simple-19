import InfoView from './view/trip-info-view.js';
import SortView from './view/sort-view.js';
import FilterView from './view/filter-view.js';
import {render} from './render.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';

const siteInfoElement = document.querySelector('.trip-info');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter({
  tripContainer: siteMainElement,
  pointsModel
});

render(new InfoView(), siteInfoElement);
render(new SortView(), siteMainElement);
render(new FilterView(), siteFilterElement);

tripPresenter.init();

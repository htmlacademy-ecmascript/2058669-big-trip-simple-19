import SortView from './view/sort-view.js';
import FilterView from './view/filter-view.js';
import {render} from './render.js';

const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteSortElement = document.querySelector('.trip-events');

render(new SortView(), siteSortElement);
render(new FilterView(), siteFilterElement);

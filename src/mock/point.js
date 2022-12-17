import {getRandomArrayElement} from '../util.js';
import {TYPES} from '../const.js';
import { getRandomDestination } from './destination.js';
import { getRandomOffer } from './offer.js';
import {humanizePointDueTime} from '../util.js';

const mockPoints = [
  {
    'base_price': 1100,
    'date_from': humanizePointDueTime(),
    'date_to': humanizePointDueTime(),
    'destination': getRandomDestination,
    'id': '0',
    'offers': getRandomOffer,
    'type': getRandomArrayElement(TYPES)
  },
  {
    'base_price': 1200,
    'date_from': humanizePointDueTime(),
    'date_to': humanizePointDueTime(),
    'destination': getRandomDestination,
    'id': '1',
    'offers': getRandomOffer,
    'type': getRandomArrayElement(TYPES)
  },
  {
    'base_price': 1300,
    'date_from': humanizePointDueTime(),
    'date_to': humanizePointDueTime(),
    'destination': getRandomDestination,
    'id': '2',
    'offers': getRandomOffer,
    'type': getRandomArrayElement(TYPES)
  },
  {
    'base_price': 1400,
    'date_from': humanizePointDueTime(),
    'date_to': humanizePointDueTime(),
    'destination': getRandomDestination,
    'id': '3',
    'offers': getRandomOffer,
    'type': getRandomArrayElement(TYPES)
  },
  {
    'base_price': 1500,
    'date_from': humanizePointDueTime(),
    'date_to': humanizePointDueTime(),
    'destination': getRandomDestination,
    'id': '4',
    'offers': getRandomOffer,
    'type': getRandomArrayElement(TYPES)
  },
  {
    'base_price': 1100,
    'date_from': humanizePointDueTime(),
    'date_to': humanizePointDueTime(),
    'destination': getRandomDestination,
    'id': '5',
    'offers': getRandomOffer,
    'type': getRandomArrayElement(TYPES)
  },

];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};


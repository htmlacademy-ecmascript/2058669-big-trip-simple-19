import {getRandomArrayElement} from '../util.js';
import {TYPES} from '../const.js';
import {humanizePointDueTime} from '../util.js';

const points = [
  {
    'basePrice': 1100,
    'dateFrom': humanizePointDueTime(),
    'dateTo': humanizePointDueTime(),
    'destination': [1],
    'id': '0',
    'offers': [1],
    'type': getRandomArrayElement(TYPES)
  },
  {
    'basePrice': 1200,
    'dateFrom': humanizePointDueTime(),
    'dateTo': humanizePointDueTime(),
    'destination': [2],
    'id': '1',
    'offers': [1],
    'type': getRandomArrayElement(TYPES)
  },
  {
    'basePrice': 1300,
    'dateFrom': humanizePointDueTime(),
    'dateTo': humanizePointDueTime(),
    'destination': [3],
    'id': '2',
    'offers': [1],
    'type': getRandomArrayElement(TYPES)
  },
  {
    'basePrice': 1400,
    'dateFrom': humanizePointDueTime(),
    'dateTo': humanizePointDueTime(),
    'destination': [4],
    'id': '3',
    'offers': [1],
    'type': getRandomArrayElement(TYPES)
  },
  {
    'basePrice': 1500,
    'dateFrom': humanizePointDueTime(),
    'dateTo': humanizePointDueTime(),
    'destination': [5],
    'id': '4',
    'offers': [1],
    'type': getRandomArrayElement(TYPES)
  },
];

function getRandomPoint() {
  return getRandomArrayElement(points);
}

export {getRandomPoint};


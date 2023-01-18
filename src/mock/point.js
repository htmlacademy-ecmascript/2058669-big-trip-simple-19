import { getRandomArrayElement } from '../utils/common.js';
import {TYPES} from '../const.js';
import { destination } from './destination.js';
//import {humanizePointDueTime} from '../util.js';

const points = [
  {
    'basePrice': 1100,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-12T11:22:13.375Z',
    'destination': destination.id,
    'id': '0',
    'offers': [1],
    'type': getRandomArrayElement(TYPES)
  },
  {
    'basePrice': 1200,
    'dateFrom': '2019-07-16T01:52:56.845Z',
    'dateTo': '2019-07-17T03:20:13.375Z',
    'destination': destination.id,
    'id': '1',
    'offers': [2],
    'type': getRandomArrayElement(TYPES)
  },
  {
    'basePrice': 1300,
    'dateFrom': '2019-07-18T08:59:56.845Z',
    'dateTo': '2019-07-19T06:21:13.375Z',
    'destination': destination.id,
    'id': '2',
    'offers': [3],
    'type': getRandomArrayElement(TYPES)
  },
  {
    'basePrice': 1400,
    'dateFrom': '2019-07-19T09:52:56.845Z',
    'dateTo': '2019-07-19T14:27:13.375Z',
    'destination': destination.id,
    'id': '3',
    'offers': [4],
    'type': getRandomArrayElement(TYPES)
  },
  {
    'basePrice': 1500,
    'dateFrom': '2019-07-20T16:52:56.845Z',
    'dateTo': '2019-07-21T18:26:13.375Z',
    'destination': destination.id,
    'id': '4',
    'offers': [5],
    'type': getRandomArrayElement(TYPES)
  },
];

function point() {
  return getRandomArrayElement(points);
}

export {point};
const offersTemplateInPoint = getRandomArrayElement(points).offers;
export { offersTemplateInPoint };

import { getRandomArrayElement } from '../utils/common.js';

const offersList = [
  {
    'type': 'flight',
    'id': 1,
    'title': 'Upgrade to a business class',
    'price': 120
  },
  {
    'type': 'restaurant',
    'id': 2,
    'title': 'Rent a car',
    'price': 200
  },
  {
    'type': 'check-in',
    'id': 3,
    'title': 'Add breakfast',
    'price': 50
  },
  {
    'type': 'sightseeing',
    'id': 4,
    'title': 'Lunch in city',
    'price': 30
  },
  {
    'type': 'bus',
    'id': 5,
    'title': 'Add luggage',
    'price': 30
  },
  {
    'type': 'taxi',
    'id': 6,
    'title': 'Switch to comfort',
    'price': 100
  },
];

function getRandomOffer() {
  return getRandomArrayElement(offersList);
}

export {getRandomOffer};
export { offersList };

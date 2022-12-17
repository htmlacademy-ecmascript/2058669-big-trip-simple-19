import {getRandomArrayElement} from '../util.js';

const mockOffers = [
  {
    'id': 1,
    'title': 'Upgrade to a business class',
    'price': 120
  },
  {
    'id': 2,
    'title': 'Rent a car',
    'price': 200
  },
  {
    'id': 3,
    'title': 'Add breakfast',
    'price': 50
  },
  {
    'id': 4,
    'title': 'Book tickets',
    'price': 40
  },
  {
    'id': 5,
    'title': 'Lunch in city',
    'price': 30
  },
  {
    'id': 6,
    'title': 'Add luggage',
    'price': 30
  },
  {
    'id': 7,
    'title': 'Switch to comfort',
    'price': 100
  },
];

function getRandomOffer() {
  return getRandomArrayElement(mockOffers);
}

export {getRandomOffer};

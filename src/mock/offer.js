import {getRandomArrayElement} from '../util.js';

const offers = [
  {
    'type': 'flight',
    'id': 1,
    'title': 'Upgrade to a business class',
    'price': 120
  },
  {
    'type': 'restaurant',
    'id': 1,
    'title': 'Rent a car',
    'price': 200
  },
  {
    'type': 'check-in',
    'id': 1,
    'title': 'Add breakfast',
    'price': 50
  },
  {
    'type': 'sightseeing',
    'id': 1,
    'title': 'Lunch in city',
    'price': 30
  },
  {
    'type': 'bus',
    'id': 1,
    'title': 'Add luggage',
    'price': 30
  },
  {
    'type': 'taxi',
    'id': 1,
    'title': 'Switch to comfort',
    'price': 100
  },
];

function getRandomOffer() {
  /*const pointTypeOffer = offers
    .find((offer) => offer.type === point.type);
  pointTypeOffer.offers
    .map((offer) => {
      const checked = point.offers.includes(offer.id) ? 'checked' : '';
      return `<input type="checkbox" ${checked}/>`;
    });*/
  return getRandomArrayElement(offers);
}

export {getRandomOffer};

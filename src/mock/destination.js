import { getRandomArrayElement } from '../utils/common.js';

const destinationsList = [
  {
    'id': 1,
    'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Chamonix',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=567',
        'description': 'Chamonix parliament building'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=259',
        'description': 'Sed sed nisi sed augue convallis suscipit in sed felis.'
      }
    ]
  },
  {
    'id': 2,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'name': 'Athens',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=13',
        'description': 'Cras aliquet varius magna, non porta ligula feugiat eget.'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=252',
        'description': 'Sed sed nisi sed augue convallis suscipit in sed felis.'
      }
    ]
  },
  {
    'id': 3,
    'description': 'Fusce tristique felis at fermentum pharetra.',
    'name': 'Nidaros',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=183',
        'description': 'Aliquam id orci ut lectus varius viverra.'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=253',
        'description': 'Sed sed nisi sed augue convallis suscipit in sed felis.'
      }
    ]
  },
  {
    'id': 4,
    'description': 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'name': 'Amsterdam',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=139',
        'description': 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=250',
        'description': 'Sed sed nisi sed augue convallis suscipit in sed felis.'
      }
    ]
  },
  {
    'id': 5,
    'description': 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'name': 'Geneva',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=258',
        'description': 'Sed sed nisi sed augue convallis suscipit in sed felis.'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=228',
        'description': 'Sed sed nisi sed augue convallis suscipit in sed felis.'
      }
    ]
  }
];
const destination = getRandomArrayElement(destinationsList);
export {destination};
export { destinationsList };

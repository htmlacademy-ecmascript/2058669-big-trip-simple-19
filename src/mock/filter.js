import { filter } from '../utils/filter.js';

function generateFilter(points) {
  return Object.entries(filter).map(
    ([filterName, filterPoints]) => ({
      name: filterName,
      count: filterPoints(points).length,
      isDisabled: (filterPoints(points).length < 0),
      isChecked: (filterName === 'everything'),
    }),
  );
}

export { generateFilter };

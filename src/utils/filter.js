import { FilterType } from '../const';
import { filterFuture, filterPast, filterPresent } from './point';
const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => filterFuture(point)),
  [FilterType.PAST]: (points) => points.filter((point) => filterPast(point)),
  [FilterType.PRESENT]: (points) => points.filter((point) => filterPresent(point))
};

export { filter };

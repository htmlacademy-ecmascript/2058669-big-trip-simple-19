import { FilterType } from '../const';
//??
const filter = {
  [FilterType.FUTURE]: (tasks) => tasks.filter((task) => !task.isArchive),
  // eslint-disable-next-line no-undef
  [FilterType.EVERYTHING]: (tasks) => tasks.filter((task) => isTaskExpired(task.dueDate) && !task.isArchive),

};

export { filter };

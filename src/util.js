import dayjs from 'dayjs';

const TIME_FORMAT = 'HH:MM';
const DATE_FORMAT = 'MMM DD';
const DATE_FORMAT_POINT = 'DD/MM/YY HH:MM';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizePointDueTime(dueTime) {
  return dueTime ? dayjs(dueTime).format(TIME_FORMAT) : '';
}

function humanizePointDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizePointDueDatePoint(dueDatePoint) {
  return dueDatePoint ? dayjs(dueDatePoint).format(DATE_FORMAT_POINT) : '';
}

export {getRandomArrayElement, humanizePointDueDate, humanizePointDueDatePoint, humanizePointDueTime};

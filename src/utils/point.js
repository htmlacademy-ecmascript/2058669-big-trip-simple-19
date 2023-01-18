import dayjs from 'dayjs';

const TIME_FORMAT = 'HH:mm';
const DATE_FORMAT = 'MMM DD';
const DATE_FORMAT_POINT = 'DD/MM/YY HH:mm';
const HOUR_IN_DAY = 24;
const MIN_IN_HOUR = 60;
// eslint-disable-next-line no-undef
const duration = require('../../node_modules/dayjs/plugin/duration.js');
dayjs.extend(duration);

const subtractDates = (startDate, endDate) => {
  const dateFrom = dayjs(startDate);
  const dateTo = dayjs(endDate);

  const diffInTotalMinutes = Math.ceil(dateTo.diff(dateFrom, 'minute', true));
  const diffInHours = Math.floor(diffInTotalMinutes / MIN_IN_HOUR) % HOUR_IN_DAY;
  const diffInDays = Math.floor(diffInTotalMinutes / (MIN_IN_HOUR * HOUR_IN_DAY));

  if ((diffInDays === 0) && (diffInHours === 0)) {
    return dayjs.duration(diffInTotalMinutes, 'minutes').format('mm[M]');
  } else if (diffInDays === 0) {
    return dayjs.duration(diffInTotalMinutes, 'minutes').format('HH[H] mm[M]');
  }
  return dayjs.duration(diffInTotalMinutes, 'minutes').format('DD[D] HH[H] mm[M]');
};

function humanizePointDueTime(dueTime) {
  return dueTime ? dayjs(dueTime).format(TIME_FORMAT) : '';
}

function humanizePointDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizePointDueDatePoint(dueDatePoint) {
  return dueDatePoint ? dayjs(dueDatePoint).format(DATE_FORMAT_POINT) : '';
}


export { humanizePointDueDate, humanizePointDueDatePoint, humanizePointDueTime, subtractDates };

import getDailyEvents from '../components/week/getDailyEvents';
import { getDateTime } from './dateUtils';

const HOURS_LIMIT = 6;

export const checkOverlap = (events, date, start, end, taskId) => {
  const eventStart = getDateTime(date, start);
  const eventEnd = getDateTime(date, end);

  const dayStart = new Date(new Date(date).setHours(0));
  const dayEnd = new Date(new Date(date).setHours(24));

  return getDailyEvents(events, dayStart, dayEnd).some(({ dateFrom, dateTo, id }) => {
    if (taskId === id && eventStart <= dateFrom && eventEnd >= dateTo) {
      return false;
    }

    return (
      (eventEnd > dateFrom && dateFrom > eventStart) ||
      (eventStart < dateTo && eventEnd > dateTo) ||
      (eventStart >= dateFrom && eventEnd <= dateTo)
    );
  });
};

export const checkIsOneDay = (start, end) => start < end;

export const checkLessThanLimit = (start, end) => (end - start) / 3600000 <= HOURS_LIMIT;

export const isDifferentTime = (start, end) => start !== end;

export const timeValidation = (events, date, eventStart, eventEnd) => {
  const start = getDateTime(date, eventStart);
  const end = getDateTime(date, eventEnd);

  return (
    !checkOverlap(events, start, end) &&
    checkIsOneDay(start, end) &&
    checkLessThanLimit(start, end) &&
    isDifferentTime(start, end)
  );
};

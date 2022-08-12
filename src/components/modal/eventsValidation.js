import getDailyEvents from '../week/getDailyEvents';
import { getDateTime } from '../../utils/dateUtils';

const HOURS_LIMIT = 6;

export const checkOverlap = (events, start, end) => {
  const dayEnd = new Date(new Date(start).setHours(24));
  const dayStart = new Date(new Date(start).setHours(0));

  return getDailyEvents(events, dayStart, dayEnd).some(
    ({ dateFrom, dateTo }) =>
      (start <= dateFrom && end >= dateTo) || (end > dateFrom && end < dateTo),
  );
};

export const checkIsOneDay = (start, end) => start < end;

export const checkLessThanLimit = (start, end) => (end - start) / 3600000 <= HOURS_LIMIT;

export const timeValidation = (events, date, eventStart, eventEnd) => {
  const start = getDateTime(date, eventStart);
  const end = getDateTime(date, eventEnd);

  return (
    !checkOverlap(events, start, end) && checkIsOneDay(start, end) && checkLessThanLimit(start, end)
  );
};

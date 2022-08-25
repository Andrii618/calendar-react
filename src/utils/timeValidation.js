import moment from 'moment';
import getDailyEvents from '../components/week/getDailyEvents';
import { getDateTime } from './dateUtils';

export const checkUpdateEventOverlap = (eventStart, dateFrom, eventEnd, dateTo) =>
  !(
    (eventStart <= dateFrom && eventEnd >= dateTo) ||
    (eventStart >= dateFrom && eventEnd <= dateTo) ||
    eventEnd !== dateFrom
  );

export const checkCreateEventOverlap = (eventStart, dateFrom, eventEnd, dateTo) =>
  (eventEnd > dateFrom && dateFrom > eventStart) ||
  (eventStart < dateTo && eventEnd > dateTo) ||
  (eventStart >= dateFrom && eventEnd <= dateTo);

export const getOverlapResult = (events, date, start, end, taskId) => {
  if (!events) {
    return null;
  }

  const eventStart = getDateTime(date, start);
  const eventEnd = getDateTime(date, end);

  const dayStart = new Date(new Date(date).setHours(0));
  const dayEnd = new Date(new Date(date).setHours(24));

  return getDailyEvents(events, dayStart, dayEnd).some(({ dateFrom, dateTo, id }) => {
    if (taskId === id) {
      return checkUpdateEventOverlap(taskId, id, eventStart, dateFrom, eventEnd, dateTo);
    }

    return checkCreateEventOverlap(eventStart, dateFrom, eventEnd, dateTo);
  });
};

export const isPastEvent = (date, startTime) => {
  const [hours, minutes] = startTime.split(':');

  return moment(date).add(hours, 'hours').add(minutes, 'minutes') < new Date();
};

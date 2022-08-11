import { getDateTime, formatTimeValue } from '../utils/dateUtils';

export const createEventData = ({ date, startTime, endTime, title, description }) => ({
  dateFrom: getDateTime(date, startTime),
  dateTo: getDateTime(date, endTime),
  description,
  title,
});

export const createEventTime = time => {
  const year = time.getFullYear();
  const month = formatTimeValue(time.getMonth() + 1);
  const day = formatTimeValue(time.getDate());
  const hours = time.getHours();

  const date = `${year}-${month}-${day}`;
  const startTime = `${hours}:00`;
  const endTime = hours === 23 ? '23:45' : `${hours + 1}:00`;

  return { date, startTime, endTime };
};

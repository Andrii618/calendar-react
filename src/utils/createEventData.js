import { getDateTime, formatTimeValue } from './dateUtils';

export const createEventData = ({ date, startTime, endTime, title, description }) => ({
  dateFrom: getDateTime(date, startTime),
  dateTo: getDateTime(date, endTime),
  description,
  title,
});

export const createTimeProps = eventDate => {
  const year = eventDate.getFullYear();
  const month = formatTimeValue(eventDate.getMonth() + 1);
  const day = formatTimeValue(eventDate.getDate());
  const hours = eventDate.getHours();

  const date = `${year}-${month}-${day}`;
  const startTime = `${formatTimeValue(hours)}:00`;
  const endTime = hours === 23 ? '23:45' : `${formatTimeValue(hours + 1)}:00`;

  return { date, startTime, endTime };
};

export const createDateProp = eventDate => {
  const year = eventDate.getFullYear();
  const month = formatTimeValue(eventDate.getMonth() + 1);
  const day = formatTimeValue(eventDate.getDate());

  return `${year}-${month}-${day}`;
};

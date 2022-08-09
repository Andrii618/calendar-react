import moment from 'moment';

export const getWeekStartDate = date => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));

  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = startDate =>
  Array.from({ length: 7 }, (_, count) => {
    const base = new Date(startDate);

    return new Date(base.setDate(base.getDate() + count));
  });

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(':');
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));

  return withMinutes;
};

export const getMonth = weekDates => {
  const startDay = weekDates[0];
  const endDay = weekDates[weekDates.length - 1];

  if (startDay.getMonth() === endDay.getMonth()) {
    return moment(startDay).format('MMM YYYY');
  }

  return `${moment(startDay).format('MMM')} - ${moment(endDay).format('MMM YYYY')}`;
};

export const isCurrentDay = day => moment(new Date()).format('l') === moment(day).format('l');

// export const formatMins = mins => (mins < 10 ? `0${mins}` : mins);

export const formatMins = mins => mins.padStart(2, '0');

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// export const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

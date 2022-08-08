import moment from 'moment';

export const getWeekStartDate = date => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));

  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = startDate => {
  const result = [];

  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }

  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(':');
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));

  return withMinutes;
};

export const getMonth = (startDate, weekDates) =>
  weekDates[0].getMonth() === weekDates[weekDates.length - 1].getMonth()
    ? moment(startDate).format('MMM')
    : `${moment(startDate).format('MMM')} - ${moment(startDate).add('months', 1).format('MMM')}`;

export const isCurrentDay = day => moment(new Date()).format('l') === moment(day).format('l');

export const formatMins = mins => (mins < 10 ? `0${mins}` : mins);

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

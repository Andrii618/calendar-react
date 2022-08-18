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

export const getMinsPassed = () => {
  const base = new Date();

  return base.getHours() * 60 + base.getMinutes();
};

export const isCurrentDay = day => moment().format('l') === moment(day).format('l');

export const formatTimeValue = timeValue => String(timeValue).padStart(2, '0');

export const formatTime = time => {
  const [hours, minutes] = time.split(':');

  const minsRound = Math.round(minutes / 15);

  const formattedMins = minsRound === 4 ? '45' : formatTimeValue(minsRound * 15);

  return `${hours}:${formattedMins}`;
};

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

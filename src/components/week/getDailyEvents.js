const getDailyEvents = (events, dayOfMonth, dayEnd) =>
  events
    .map(event => ({
      ...event,
      dateFrom: new Date(event.dateFrom),
      dateTo: new Date(event.dateTo),
    }))
    .filter(event => event.dateFrom > dayOfMonth && event.dateTo < dayEnd);

export default getDailyEvents;

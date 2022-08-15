const getDailyEvents = (events, dayOfMonth, dayEnd) => {
  if (!events) {
    return null;
  }

  return events
    .map(event => ({
      ...event,
      dateFrom: new Date(event.dateFrom),
      dateTo: new Date(event.dateTo),
    }))
    .filter(event => event.dateFrom >= dayOfMonth && event.dateTo < dayEnd);
};

export default getDailyEvents;

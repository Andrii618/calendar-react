import { getDateTime } from '../utils/dateUtils';

const createEvent = eventFormData => {
  const dateFrom = getDateTime(eventFormData.date, eventFormData.startTime);
  const dateTo = getDateTime(eventFormData.date, eventFormData.endTime);

  return {
    dateFrom,
    dateTo,
    description: eventFormData.description,
    title: eventFormData.title,
  };
};

export default createEvent;

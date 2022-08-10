import React from 'react';
import { isCurrentDay } from '../../utils/dateUtils';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events, onRemoveEvent }) => {
  if (!events) {
    return null;
  }

  return (
    <div className="calendar__week">
      {weekDates.map((dayOfMonth, index) => {
        const dayEnd = new Date(dayOfMonth.getTime()).setHours(dayOfMonth.getHours() + 24);

        const dayEvents = events
          .map(event => ({
            ...event,
            dateFrom: new Date(event.dateFrom),
            dateTo: new Date(event.dateTo),
          }))
          .filter(event => event.dateFrom > dayOfMonth && event.dateTo < dayEnd);

        return (
          <Day
            key={dayOfMonth.getDate()}
            dataDay={dayOfMonth.getDate()}
            dayEvents={dayEvents}
            currentDay={isCurrentDay(weekDates[index])}
            onRemoveEvent={onRemoveEvent}
          />
        );
      })}
    </div>
  );
};

export default Week;

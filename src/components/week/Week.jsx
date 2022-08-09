import React from 'react';
import { isCurrentDay } from '../../utils/dateUtils';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events }) => (
  <div className="calendar__week">
    {weekDates.map((dayOfMonth, index) => {
      const dayEnd = new Date(dayOfMonth.getTime()).setHours(dayOfMonth.getHours() + 24);

      //getting all events from the day we will render
      const dayEvents = events.filter(
        event => event.dateFrom > dayOfMonth && event.dateTo < dayEnd,
      );

      return (
        <Day
          key={dayOfMonth.getDate()}
          dataDay={dayOfMonth.getDate()}
          dayEvents={dayEvents}
          currentDay={isCurrentDay(weekDates[index])}
        />
      );
    })}
  </div>
);

export default Week;

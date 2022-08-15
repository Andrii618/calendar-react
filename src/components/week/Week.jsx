import React from 'react';

import { isCurrentDay } from '../../utils/dateUtils';
import getDailyEvents from './getDailyEvents';

import Day from '../day/Day';

import './week.scss';

const Week = ({ setNewDay, setEventData, events, weekDates, isDataGotten }) => (
  <div className="calendar__week">
    {weekDates.map((dayOfMonth, index) => {
      const dayEnd = new Date(dayOfMonth).setHours(24);

      const dayEvents = events ? getDailyEvents(events, dayOfMonth, dayEnd) : null;

      return (
        <Day
          key={dayOfMonth.getDate()}
          setNewDay={setNewDay}
          setEventData={setEventData}
          dataDay={dayOfMonth.getDate()}
          dayEvents={dayEvents}
          isCurrentDay={isCurrentDay(weekDates[index])}
          eventDate={dayOfMonth}
          isDataGotten={isDataGotten}
        />
      );
    })}
  </div>
);

export default Week;

import React from 'react';

import { isCurrentDay } from '../../utils/dateUtils';
import getDailyEvents from './getDailyEvents';

import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events, onUpdateEvents, setNewDay, setEventTime, setEventData }) => (
  <div className="calendar__week">
    {weekDates.map((dayOfMonth, index) => {
      const dayEnd = new Date(dayOfMonth).setHours(dayOfMonth.getHours() + 24);

      const dayEvents = events ? getDailyEvents(events, dayOfMonth, dayEnd) : null;

      return (
        <Day
          key={dayOfMonth.getDate()}
          dataDay={dayOfMonth.getDate()}
          dayEvents={dayEvents}
          isCurrentDay={isCurrentDay(weekDates[index])}
          onUpdateEvents={onUpdateEvents}
          setNewDay={setNewDay}
          setEventTime={setEventTime}
          setEventData={setEventData}
          eventDate={dayOfMonth}
        />
      );
    })}
  </div>
);

export default Week;

import React from 'react';
import PropTypes from 'prop-types';

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

Week.propTypes = {
  setNewDay: PropTypes.func.isRequired,
  setEventData: PropTypes.func.isRequired,
  events: PropTypes.array,
  weekDates: PropTypes.array.isRequired,
  isDataGotten: PropTypes.bool,
};

Week.defaultProps = {
  events: null,
  isDataGotten: false,
};

export default Week;

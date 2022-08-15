import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../navigation/Navigation';
import Sidebar from '../sidebar/Sidebar';
import Week from '../week/Week';

import './calendar.scss';

const Calendar = ({ setNewDay, setEventData, events, weekDates, isDataGotten }) => (
  <section className="calendar">
    <Navigation weekDates={weekDates} />
    <div className="calendar__body">
      <div className="calendar__week-container">
        <Sidebar />
        <Week
          setNewDay={setNewDay}
          setEventData={setEventData}
          events={events}
          weekDates={weekDates}
          isDataGotten={isDataGotten}
        />
      </div>
    </div>
  </section>
);

Calendar.propTypes = {
  setNewDay: PropTypes.func.isRequired,
  setEventData: PropTypes.func.isRequired,
  events: PropTypes.array,
  weekDates: PropTypes.array.isRequired,
  isDataGotten: PropTypes.bool,
};

Calendar.defaultProps = {
  events: null,
  isDataGotten: false,
};

export default Calendar;

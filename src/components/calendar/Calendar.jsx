import React from 'react';

import Navigation from '../navigation/Navigation';
import Sidebar from '../sidebar/Sidebar';
import Week from '../week/Week';

import './calendar.scss';

const Calendar = ({ setNewDay, setEventData, events, weekDates }) => (
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
        />
      </div>
    </div>
  </section>
);

export default Calendar;

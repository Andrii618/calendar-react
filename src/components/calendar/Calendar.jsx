import React from 'react';

import Navigation from '../navigation/Navigation';
import Sidebar from '../sidebar/Sidebar';
import Week from '../week/Week';

import './calendar.scss';

const Calendar = ({ onUpdateEvents, goNewDay, weekDates, events }) => (
  <section className="calendar">
    <Navigation weekDates={weekDates} />
    <div className="calendar__body">
      <div className="calendar__week-container">
        <Sidebar />
        <Week
          weekDates={weekDates}
          events={events}
          onUpdateEvents={onUpdateEvents}
          goNewDay={goNewDay}
        />
      </div>
    </div>
  </section>
);

export default Calendar;

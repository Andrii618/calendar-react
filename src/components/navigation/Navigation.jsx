import React from 'react';

import { days } from '../../utils/dateUtils';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map(dayDate => (
      <div className="calendar__day-label day-label">
        <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
        <span className="day-label__day-number">{dayDate.getDate()}</span>
      </div>
    ))}
  </header>
);

export default Navigation;

import React from 'react';
import classNames from 'classnames';

import { days, isCurrentDay } from '../../utils/dateUtils';

import './navigation.scss';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map(dayDate => {
      const dayNumberStyles = classNames('day-label__day-number', {
        'day-label__day-number_current': isCurrentDay(dayDate),
      });

      const dayNameStyles = classNames('day-label__day-name', {
        'day-label__day-name_current': isCurrentDay(dayDate),
      });

      return (
        <div key={dayDate.getDay()} className="calendar__day-label day-label">
          <span className={dayNameStyles}>{days[dayDate.getDay()]}</span>
          <span className={dayNumberStyles}>{dayDate.getDate()}</span>
        </div>
      );
    })}
  </header>
);

export default Navigation;

import React from 'react';
import classNames from 'classnames';

import { days, isCurrentDay } from '../../utils/dateUtils';

const NavigationDay = ({ dayDate }) => {
  const dayNumberStyles = classNames('day-label__day-number', {
    'day-label__day-number_current': isCurrentDay(dayDate),
  });

  const dayNameStyles = classNames('day-label__day-name', {
    'day-label__day-name_current': isCurrentDay(dayDate),
  });

  return (
    <div className="calendar__day-label day-label">
      <span className={dayNameStyles}>{days[dayDate.getDay()]}</span>
      <span className={dayNumberStyles}>{dayDate.getDate()}</span>
    </div>
  );
};

export default NavigationDay;

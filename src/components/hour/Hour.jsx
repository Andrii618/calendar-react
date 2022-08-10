import React from 'react';

import { formatTimeValue } from '../../utils/dateUtils.js';
import Event from '../event/Event';

import './hour.scss';

const Hour = ({ dataHour, hourEvents, onUpdateEvents }) => (
  <div className="calendar__time-slot" data-time={dataHour + 1}>
    {hourEvents &&
      hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatTimeValue(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatTimeValue(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            id={id}
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            onRemoveEvent={onUpdateEvents}
          />
        );
      })}
  </div>
);

export default Hour;

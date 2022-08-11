import React from 'react';

import { formatTimeValue } from '../../utils/dateUtils.js';
import Event from '../event/Event';

import './hour.scss';

const Hour = ({ dataHour, hourEvents, onUpdateEvents, onSetEventTime, eventDate }) => (
  <div
    className="calendar__time-slot"
    data-time={dataHour + 1}
    onClick={e => {
      e.stopPropagation();
      onSetEventTime(new Date(eventDate.setHours(dataHour)));
    }}
  >
    {hourEvents &&
      hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${formatTimeValue(dateFrom.getHours())}:${formatTimeValue(
          dateFrom.getMinutes(),
        )}`;

        const eventEnd = `${formatTimeValue(dateTo.getHours())}:${formatTimeValue(
          dateTo.getMinutes(),
        )}`;

        return (
          <Event
            key={id}
            id={id}
            height={(dateTo.getTime() - dateFrom.getTime()) / 60000}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            updateEvents={onUpdateEvents}
          />
        );
      })}
  </div>
);

export default Hour;

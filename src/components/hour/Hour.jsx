import React from 'react';

import { formatTimeValue } from '../../utils/dateUtils.js';
import Event from '../event/Event';

import './hour.scss';

const Hour = ({ dataHour, hourEvents, onSetEventTime, eventDate, setEventData }) => (
  <div
    className="calendar__time-slot"
    data-time={dataHour + 1}
    onClick={e => {
      e.stopPropagation();
      onSetEventTime(new Date(eventDate.setHours(dataHour)));
    }}
  >
    {hourEvents &&
      hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
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
            description={description}
            onSetEventData={setEventData}
            startTime={eventStart}
            endTime={eventEnd}
            date={`${dateFrom.getFullYear()}-${formatTimeValue(
              dateFrom.getMonth() + 1,
            )}-${formatTimeValue(dateFrom.getDate())}`}
          />
        );
      })}
  </div>
);

export default Hour;

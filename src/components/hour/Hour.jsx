import React from 'react';

import { formatTimeValue } from '../../utils/dateUtils.js';
import { createDateProp } from '../../utils/createEventData.js';

import Event from '../event/Event';

import './hour.scss';

const Hour = ({ setEventData, dataHour, hourEvents, eventDate }) => (
  <div
    className="calendar__time-slot"
    data-time={dataHour + 1}
    onClick={e => {
      e.stopPropagation();

      setEventData({
        time: new Date(eventDate.setHours(dataHour)),
        description: '',
        title: '',
        id: null,
      });
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
            onSetEventData={setEventData}
            height={(dateTo.getTime() - dateFrom.getTime()) / 60000}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            id={id}
            title={title}
            startTime={eventStart}
            endTime={eventEnd}
            description={description}
            date={createDateProp(dateFrom)}
          />
        );
      })}
  </div>
);

export default Hour;

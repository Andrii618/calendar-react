import React from 'react';
import PropTypes from 'prop-types';

import { formatTimeValue } from '../../utils/dateUtils.js';
import { createDateProp } from '../../utils/createEventData.js';

import Event from '../event/Event';

import './hour.scss';

const Hour = ({ setEventData, dataHour, hourEvents, eventDate, isDataGotten }) => {
  const handleSetEventHours = e => {
    if (!isDataGotten) {
      return;
    }

    e.stopPropagation();

    setEventData({
      time: new Date(eventDate.setHours(dataHour)),
      description: '',
      title: '',
      id: null,
    });
  };

  const minuteInMilliseconds = 60000;

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1} onClick={handleSetEventHours}>
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
              height={(dateTo.getTime() - dateFrom.getTime()) / minuteInMilliseconds}
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
};

Hour.propTypes = {
  setEventData: PropTypes.func.isRequired,
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array,
  eventDate: PropTypes.object.isRequired,
  isDataGotten: PropTypes.bool,
};

Hour.defaultProps = {
  hourEvents: null,
  isDataGotten: false,
};

export default Hour;

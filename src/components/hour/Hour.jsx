import React from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1} onClick={handleSetEventHours}>
      {hourEvents &&
        hourEvents.map(hourEvent => (
          <Event key={hourEvent.id} onSetEventData={setEventData} eventData={hourEvent} />
        ))}
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

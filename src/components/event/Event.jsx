import React from 'react';
import PropTypes from 'prop-types';

import './event.scss';

const Event = ({
  onSetEventData,
  height,
  marginTop,
  time,
  id,
  title,
  description,
  date,
  startTime,
  endTime,
}) => {
  const lineBreak = height >= 120 ? 'anywhere' : 'initial';

  const eventStyle = {
    height,
    marginTop,
    lineBreak,
  };

  const handleUpdateEvent = e => {
    e.stopPropagation();

    onSetEventData({ description, title, id, date, startTime, endTime });
  };

  return (
    <div style={eventStyle} id={id} className="event" onClick={handleUpdateEvent}>
      {height >= 30 && <div className="event__title">{title}</div>}
      {height >= 60 && <div className="event__time">{time}</div>}
    </div>
  );
};

Event.propTypes = {
  onSetEventData: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
};

export default Event;

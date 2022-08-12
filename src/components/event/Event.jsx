import React from 'react';

import './event.scss';

const Event = ({
  height,
  marginTop,
  title,
  time,
  id,
  description,
  onSetEventData,
  startTime,
  endTime,
  date,
}) => {
  const lineBreak = height >= 120 ? 'anywhere' : 'initial';

  const eventStyle = {
    height,
    marginTop,

    lineBreak,
  };

  const handleUpdateEvent = e => {
    e.stopPropagation();

    onSetEventData({ description, title, id, startTime, endTime, date });
  };

  return (
    <div className="event" style={{ height }} onClick={handleUpdateEvent}>
      <div style={eventStyle} id={id} className="event__content">
        {height >= 30 && <div className="event__title">{title}</div>}
        {height >= 60 && <div className="event__time">{time}</div>}
      </div>
    </div>
  );
};

export default Event;

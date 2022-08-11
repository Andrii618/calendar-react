import React from 'react';
import { removeEvent } from '../../gateway/events';

import './event.scss';

const Event = ({ height, marginTop, title, time, updateEvents, id }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const handleRemoveEvent = () => {
    removeEvent(id).then(() => {
      updateEvents();
    });
  };

  return (
    <div style={eventStyle} id={id} className="event" onClick={handleRemoveEvent}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;

import React from 'react';
import { removeEvent } from '../../gateway/events';

import './event.scss';

const Event = ({ height, marginTop, title, time, updateEvents, id }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const handleRemoveEvent = e => {
    e.stopPropagation();

    removeEvent(id)
      .then(() => {
        updateEvents();
      })
      .catch(() => {
        alert("Internal Server Error. Can't remove event. Try to refresh the page");
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

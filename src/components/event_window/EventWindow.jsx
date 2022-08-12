import React, { useState, useEffect } from 'react';

import { formatTime } from '../../utils/dateUtils';
import { removeEvent, updateEvent } from '../../gateway/events';
import { createEventData } from '../../gateway/createEventData';
import { timeValidation } from '../../utils/timeValidation';

import UpdateForm from '../update_form/UpdateForm';

import './eventWindow.scss';

const EventWindow = ({ onUpdateEvents, hideWindow, eventDataObj, events }) => {
  const [eventData, setEventData] = useState({
    ...eventDataObj,
  });

  const [isEventFilled, setIsEventFilled] = useState(true);

  useEffect(() => {
    const { startTime, endTime, date, title } = eventData;
  }, [eventData]);

  const handleDataChanges = ({ target }) => {
    const value = target.type === 'time' ? formatTime(target.value) : target.value;

    setEventData({ ...eventData, [target.name]: value });
  };

  const handleRemoveEvent = () => {
    hideWindow();

    removeEvent(eventDataObj.id)
      .then(() => {
        onUpdateEvents();
      })
      .catch(() => {
        alert("Internal Server Error. Can't remove event. Try to refresh the page");
      });
  };

  const handleUpdateData = () => {
    updateEvent(eventDataObj.id, createEventData(eventData)).then(() => {
      onUpdateEvents();
    });

    hideWindow();
  };

  return (
    <div className="event-window overlay">
      <div className="event-window__content">
        <div className="update-event">
          <button className="update-event__close-btn" onClick={hideWindow}>
            +
          </button>
          <UpdateForm
            eventData={eventData}
            isFilled={isEventFilled}
            onRemoveEvent={handleRemoveEvent}
            onDataChange={handleDataChanges}
            onUpdateData={handleUpdateData}
          />
        </div>
      </div>
      <div className="event-window__close-field" onClick={hideWindow}></div>
    </div>
  );
};

export default EventWindow;

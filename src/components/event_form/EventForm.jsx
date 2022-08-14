import React, { useState } from 'react';

import { formatTime } from '../../utils/dateUtils';

import DescriptionInput from './DescriptionInput';
import EventFormButtons from './EventFormButtons';

import './event-form.scss';

const EventForm = ({ eventDataObj, onUpdateEvents, events, showAlert }) => {
  const [eventData, setEventData] = useState({
    ...eventDataObj,
  });

  const handleDataChange = ({ target }) => {
    const value = target.type === 'time' ? formatTime(target.value) : target.value;

    setEventData({ ...eventData, [target.name]: value });
  };

  return (
    <form className="event-form">
      <input
        placeholder="Write title..."
        type="text"
        name="title"
        className="event-form__field"
        maxLength="36"
        value={eventData.title}
        onChange={handleDataChange}
      />
      <div className="event-form__time">
        <input
          type="date"
          name="date"
          className="event-form__field"
          value={eventData.date}
          onChange={handleDataChange}
        />
        <input
          type="time"
          name="startTime"
          className="event-form__field"
          value={eventData.startTime}
          onChange={handleDataChange}
        />
        <span>-</span>
        <input
          type="time"
          name="endTime"
          className="event-form__field"
          value={eventData.endTime}
          onChange={handleDataChange}
        />
      </div>
      <DescriptionInput value={eventData.description} onTypeText={handleDataChange} />
      <EventFormButtons
        eventData={eventData}
        onUpdateEvents={onUpdateEvents}
        showAlert={showAlert}
        events={events}
      />
    </form>
  );
};

export default EventForm;

import React from 'react';
import classNames from 'classnames';

import './form.scss';

const Form = ({ eventData, isFilled, onDataChange, handleSubmit }) => {
  const submitButtonStyles = classNames('event-form__submit-btn', {
    'event-form__submit-btn_disabled': isFilled === false,
    'event-form__submit-btn_working': isFilled,
  });

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Write title..."
        className="event-form__field"
        maxLength="36"
        value={eventData.title}
        onChange={onDataChange}
      />
      <div className="event-form__time">
        <input
          type="date"
          name="date"
          className="event-form__field"
          value={eventData.date}
          onChange={onDataChange}
        />
        <input
          type="time"
          name="startTime"
          className="event-form__field"
          value={eventData.startTime}
          onChange={onDataChange}
        />
        <span>-</span>
        <input
          type="time"
          name="endTime"
          className="event-form__field"
          value={eventData.endTime}
          onChange={onDataChange}
        />
      </div>
      <textarea
        name="description"
        placeholder="Type description..."
        className="event-form__field event-form__desc"
        maxLength="161"
        value={eventData.description}
        onChange={onDataChange}
        style={{ height: eventData.description.length * 0.6 + 30 }}
      ></textarea>
      <button type="submit" className={submitButtonStyles} disabled={!isFilled}>
        {isFilled ? 'Create event' : 'Fill fields, please'}
      </button>
    </form>
  );
};

export default Form;

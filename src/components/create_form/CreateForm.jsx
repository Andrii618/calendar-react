import React from 'react';
import classNames from 'classnames';

import './createForm.scss';

const CreateForm = ({ eventData, isFilled, onDataChange, handleSubmit }) => {
  const submitButtonStyles = classNames('create-form__submit-btn', {
    'create-form__submit-btn_disabled': isFilled === false,
    'create-form__submit-btn_working': isFilled,
  });

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Write title..."
        className="create-form__field"
        maxLength="36"
        value={eventData.title}
        onChange={onDataChange}
      />
      <div className="create-form__time">
        <input
          type="date"
          name="date"
          className="create-form__field"
          value={eventData.date}
          onChange={onDataChange}
        />
        <input
          type="time"
          name="startTime"
          className="create-form__field"
          value={eventData.startTime}
          onChange={onDataChange}
        />
        <span>-</span>
        <input
          type="time"
          name="endTime"
          className="create-form__field"
          value={eventData.endTime}
          onChange={onDataChange}
        />
      </div>
      <textarea
        name="description"
        placeholder="Type description..."
        className="create-form__field create-form__desc"
        maxLength="200"
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

export default CreateForm;

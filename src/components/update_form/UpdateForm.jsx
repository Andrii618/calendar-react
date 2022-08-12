import React from 'react';
import classNames from 'classnames';

import './updateForm.scss';

const UpdateForm = ({ eventData, isFilled, onDataChange, onUpdateData, onRemoveEvent }) => {
  const updateButtonStyles = classNames('update-form__update-btn', {
    'update-form__update-btn_disabled': isFilled === false,
    'update-form__update-btn_working': isFilled,
  });

  return (
    <form className="update-form" onSubmit={onUpdateData}>
      <input
        type="text"
        name="title"
        placeholder="Write title..."
        className="update-form__field"
        maxLength="36"
        value={eventData.title}
        onChange={onDataChange}
      />
      <div className="update-form__time">
        <input
          type="date"
          name="date"
          className="update-form__field"
          value={eventData.date}
          onChange={onDataChange}
        />
        <input
          type="time"
          name="startTime"
          className="update-form__field"
          value={eventData.startTime}
          onChange={onDataChange}
        />
        <span>-</span>
        <input
          type="time"
          name="endTime"
          className="update-form__field"
          value={eventData.endTime}
          onChange={onDataChange}
        />
      </div>
      <textarea
        name="description"
        placeholder="Type description..."
        className="update-form__field update-form__desc"
        maxLength="200"
        value={eventData.description}
        onChange={onDataChange}
        style={{ height: eventData.description.length * 0.6 + 30 }}
      ></textarea>
      <div className="update-form__buttons">
        <button type="button" className="update-form__remove-btn" onClick={onRemoveEvent}>
          Remove event
        </button>
        <button type="submit" className={updateButtonStyles} disabled={!isFilled}>
          {isFilled ? 'Update event' : 'Fill fields, please'}
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import events from '../../gateway/events';
import createEvent from '../../gateway/createEvent';
import { getDivisionResult, formatTime } from '../../utils/dateUtils';

import './modal.scss';

const Modal = ({ hideCreateForm }) => {
  const [eventFormData, setEventFormData] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    date: '',
  });

  const [isFormFull, setIsFormFull] = useState(false);

  useEffect(() => {
    const { startTime, endTime } = eventFormData;

    if (getDivisionResult(startTime, endTime)) {
      setEventFormData({ ...eventFormData, startTime: '', endTime: '' });
      alert('you put wrong duration or same');
    }

    setIsFormFull(!Object.values(eventFormData).some(value => value === ''));
  }, [eventFormData]);

  const handleSubmitForm = e => {
    e.preventDefault();
    hideCreateForm();
  };

  const handleFormChange = ({ target }) => {
    const value = target.type === 'time' ? formatTime(target.value) : target.value;

    setEventFormData({ ...eventFormData, [target.name]: value });
  };

  const submitButtonStyles = classNames('event-form__submit-btn', {
    'event-form__submit-btn_disabled': isFormFull === false,
    'event-form__submit-btn_working': isFormFull === true,
  });

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={hideCreateForm}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmitForm}>
            <input
              type="text"
              name="title"
              placeholder="Write title..."
              className="event-form__field"
              maxLength="38"
              value={eventFormData.title}
              onChange={handleFormChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={eventFormData.date}
                onChange={handleFormChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={eventFormData.startTime}
                onChange={handleFormChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={eventFormData.endTime}
                onChange={handleFormChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Type description..."
              className="event-form__field event-form__desc"
              maxLength="190"
              value={eventFormData.description}
              onChange={handleFormChange}
            ></textarea>
            <button type="submit" className={submitButtonStyles} disabled={!isFormFull}>
              {isFormFull ? 'Create event' : 'Fill all fields, please'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

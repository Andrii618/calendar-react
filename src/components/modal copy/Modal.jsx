import React, { useEffect, useState } from 'react';

import { uploadEvent } from '../../gateway/events';
import { formatTime } from '../../utils/dateUtils';
import { createEventData } from '../../gateway/createEventData';
import { timeValidation } from '../../utils/timeValidation';

import CreateForm from '../create_form/CreateForm';

import './modal.scss';

const Modal = ({ hideModal, onUploadEvent, events, eventDataObj }) => {
  const [eventData, setEventData] = useState({
    ...eventDataObj,
  });

  const [isEventFilled, setIsEventFilled] = useState(false);

  useEffect(() => {
    const { startTime, endTime, date, title } = eventData;

    const isValid = title !== '' && timeValidation(events, date, startTime, endTime);

    setIsEventFilled(isValid);
  }, [eventData]);

  const handleSubmitData = e => {
    e.preventDefault();

    uploadEvent(createEventData(eventData)).then(() => {
      onUploadEvent();
    });

    hideModal();
  };

  const handleDataChanges = ({ target }) => {
    const value = target.type === 'time' ? formatTime(target.value) : target.value;

    setEventData({ ...eventData, [target.name]: value });
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={hideModal}>
            +
          </button>
          <CreateForm
            eventData={eventData}
            isFilled={isEventFilled}
            onDataChange={handleDataChanges}
            handleSubmit={handleSubmitData}
          />
        </div>
      </div>
      <div className="modal__close-field" onClick={hideModal}></div>
    </div>
  );
};

export default Modal;

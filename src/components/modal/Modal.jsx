import React, { useEffect, useState } from 'react';

import { uploadEvent } from '../../gateway/events';
import { formatTime } from '../../utils/dateUtils';
import createEventData from '../../gateway/createEventData';

import Form from '../form/Form';

import './modal.scss';

const Modal = ({ hideModal, onUploadEvent }) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    date: '',
  });

  const [isEventFilled, setIsFormFull] = useState(false);

  useEffect(() => {
    setIsFormFull(!Object.values(eventData).some(value => value === ''));
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
          <Form
            eventData={eventData}
            isFilled={isEventFilled}
            onDataChange={handleDataChanges}
            handleSubmit={handleSubmitData}
          />
        </div>
      </div>
      <div className="modal__exit-field" onClick={hideModal}></div>
    </div>
  );
};

export default Modal;

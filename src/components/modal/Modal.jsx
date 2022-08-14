import React from 'react';

import EventForm from '../event_form/EventForm';

import './modal.scss';

const Modal = ({ eventData, hideModal, onUploadEvent, events, showAlert }) => (
  <div className="modal overlay">
    <div className="modal__content">
      <div className="create-event">
        <button className="create-event__close-btn" onClick={hideModal}>
          +
        </button>
        <EventForm
          eventDataObj={eventData}
          onUpdateEvents={onUploadEvent}
          events={events}
          showAlert={showAlert}
        />
      </div>
    </div>
    <div className="modal__close-field" onClick={hideModal}></div>
  </div>
);

export default Modal;

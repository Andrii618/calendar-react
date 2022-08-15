import React from 'react';
import PropTypes from 'prop-types';

import EventForm from '../event_form/EventForm';

import './modal.scss';

const Modal = ({ hideModal, onUploadEvent, eventData, events, showAlert }) => (
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

Modal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  onUploadEvent: PropTypes.func.isRequired,
  eventData: PropTypes.object.isRequired,
  events: PropTypes.array,
  showAlert: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  events: null,
};

export default Modal;

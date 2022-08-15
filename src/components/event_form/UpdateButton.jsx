import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { updateEvent } from '../../gateway/events';
import { createEventData } from '../../utils/createEventData';

const UpdateButton = ({ id, isWorking, eventData, updateEvents }) => {
  const updateButtonClass = classNames('event-form__change-btn button', {
    'event-form__change-btn_working': isWorking,
  });

  const handleChangeEventData = e => {
    e.preventDefault();

    updateEvent(id, createEventData(eventData)).then(() => {
      updateEvents();
    });
  };

  return (
    <button
      type="submit"
      className={updateButtonClass}
      disabled={!isWorking}
      onClick={handleChangeEventData}
    >
      {isWorking ? 'Update' : 'Fill fields'}
    </button>
  );
};

UpdateButton.propTypes = {
  id: PropTypes.string.isRequired,
  isWorking: PropTypes.bool,
  eventData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  }).isRequired,
  updateEvents: PropTypes.func.isRequired,
};

UpdateButton.defaultProps = {
  isWorking: false,
};

export default UpdateButton;

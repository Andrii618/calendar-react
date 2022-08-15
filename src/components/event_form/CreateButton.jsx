import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { createEvent } from '../../gateway/events';
import { createEventData } from '../../utils/createEventData';

const CreateButton = ({ isWorking, eventData, updateEvents }) => {
  const createButtonClass = classNames('event-form__change-btn button', {
    'event-form__change-btn_working': isWorking,
  });

  const handleCreateEvent = e => {
    e.preventDefault();

    createEvent(createEventData(eventData)).then(() => {
      updateEvents();
    });
  };

  return (
    <button
      type="submit"
      className={createButtonClass}
      onClick={handleCreateEvent}
      disabled={!isWorking}
    >
      {isWorking ? 'Create' : 'Fill fields'}
    </button>
  );
};

CreateButton.propTypes = {
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

CreateButton.defaultProps = {
  isWorking: false,
};

export default CreateButton;

import React from 'react';
import classNames from 'classnames';

import { createEvent } from '../../gateway/events';
import { createEventData } from '../../utils/createEventData';

const CreateButton = ({ isWorking, eventData, updateEvents }) => {
  const createButtonClass = classNames('event-form__change-btn', {
    'event-form__change-btn_working': isWorking,
    'event-form__change-btn_disabled': isWorking === false,
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

export default CreateButton;
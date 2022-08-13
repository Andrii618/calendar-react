import React from 'react';
import classNames from 'classnames';

import { updateEvent } from '../../gateway/events';
import { createEventData } from '../../utils/createEventData';

const UpdateButton = ({ id, eventData, isWorking, updateEvents }) => {
  const updateButtonClass = classNames('event-form__change-btn', {
    'event-form__change-btn_working': isWorking,
    'event-form__change-btn_disabled': isWorking === false,
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
export default UpdateButton;

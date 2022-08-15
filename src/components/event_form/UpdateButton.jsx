import React from 'react';
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
export default UpdateButton;

import React from 'react';

import { removeEvent } from '../../gateway/events';

const RemoveButton = ({ id, updateEvents }) => {
  const handleRemoveEvent = e => {
    e.preventDefault();

    removeEvent(id).then(() => {
      updateEvents();
    });
  };

  return (
    <button type="button" className="event-form__remove-btn" onClick={handleRemoveEvent}>
      Remove
    </button>
  );
};

export default RemoveButton;

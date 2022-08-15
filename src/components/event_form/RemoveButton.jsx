import React from 'react';

import { removeEvent } from '../../gateway/events';

const RemoveButton = ({ id, updateEvents }) => {
  const handleRemoveEvent = () => {
    removeEvent(id).then(() => {
      updateEvents();
    });
  };

  return (
    <button type="button" className="event-form__remove-btn button" onClick={handleRemoveEvent}>
      Remove
    </button>
  );
};

export default RemoveButton;

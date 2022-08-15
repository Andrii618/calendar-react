import React from 'react';
import PropTypes from 'prop-types';

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

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
  updateEvents: PropTypes.func.isRequired,
};

export default RemoveButton;

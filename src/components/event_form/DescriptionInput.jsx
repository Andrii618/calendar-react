import React from 'react';
import PropTypes from 'prop-types';

const DescriptionInput = ({ value, onTypeText }) => (
  <textarea
    placeholder="Type description..."
    name="description"
    className="event-form__field event-form__desc"
    maxLength="200"
    value={value}
    onChange={onTypeText}
    style={{ height: value.length * 0.6 + 30 }}
  ></textarea>
);

DescriptionInput.propTypes = {
  value: PropTypes.string,
  onTypeText: PropTypes.func.isRequired,
};

DescriptionInput.defaultValue = {
  value: '',
};

export default DescriptionInput;

import React from 'react';

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

export default DescriptionInput;

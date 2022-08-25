import React from 'react';
import PropTypes from 'prop-types';

import { formatTimeValue } from '../../utils/dateUtils.js';
import { createDateProp } from '../../utils/createEventData.js';

import './event.scss';

const MINUTE_IN_MILLISECONDS = 60000;

const Event = ({ onSetEventData, eventData }) => {
  const { dateFrom, dateTo, id, title, description } = eventData;

  const height = (dateTo.getTime() - dateFrom.getTime()) / MINUTE_IN_MILLISECONDS;
  const marginTop = dateFrom.getMinutes();
  const lineBreak = height >= 120 ? 'anywhere' : 'initial';

  const eventStyle = {
    height,
    marginTop,
    lineBreak,
  };

  const eventStart = `${formatTimeValue(dateFrom.getHours())}:${formatTimeValue(
    dateFrom.getMinutes(),
  )}`;

  const eventEnd = `${formatTimeValue(dateTo.getHours())}:${formatTimeValue(dateTo.getMinutes())}`;

  const handleUpdateEvent = e => {
    e.stopPropagation();

    onSetEventData({
      description,
      title,
      id,
      startTime: eventStart,
      endTime: eventEnd,
      date: createDateProp(dateFrom),
    });
  };

  return (
    <div style={eventStyle} className="event" onClick={handleUpdateEvent}>
      {height >= 30 && <div className="event__title">{title}</div>}
      {height >= 60 && <div className="event__time">{`${eventStart} - ${eventEnd}`}</div>}
    </div>
  );
};

Event.propTypes = {
  onSetEventData: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
};

export default Event;

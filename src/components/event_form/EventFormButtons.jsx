import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { getOverlapResult } from '../../utils/timeValidation';

import CreateButton from './CreateButton';
import RemoveButton from './RemoveButton';
import UpdateButton from './UpdateButton';

const EventFormButtons = ({ eventData, onUpdateEvents, showAlert, events }) => {
  const [isWorking, setIsWorking] = useState(false);

  const { date, startTime, endTime, id, title } = eventData;

  useEffect(() => {
    let isInvalid = getOverlapResult(events, date, startTime, endTime, id) || startTime >= endTime;

    showAlert(isInvalid, 'Your event overlaps already existed or time format is incorrect');

    if (title === '') {
      isInvalid = true;
    }

    setIsWorking(!isInvalid);
  }, [eventData]);

  const IsUpdateMode = Boolean(id);

  const eventFormButtonsClass = classNames('event-form__buttons', {
    'event-form__buttons_filled': IsUpdateMode,
  });

  return (
    <div className={eventFormButtonsClass}>
      {!IsUpdateMode && (
        <CreateButton isWorking={isWorking} eventData={eventData} updateEvents={onUpdateEvents} />
      )}
      {IsUpdateMode && (
        <>
          <RemoveButton id={id} updateEvents={onUpdateEvents} />
          <UpdateButton
            id={id}
            isWorking={isWorking}
            eventData={eventData}
            updateEvents={onUpdateEvents}
          />
        </>
      )}
    </div>
  );
};

export default EventFormButtons;

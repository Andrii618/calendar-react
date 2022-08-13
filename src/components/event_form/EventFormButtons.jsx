import React from 'react';
import classNames from 'classnames';

import CreateButton from './CreateButton';
import RemoveButton from './RemoveButton';
import UpdateButton from './UpdateButton';

const EventFormButtons = ({ eventData, isFilled, onUpdateEvents }) => {
  const IsUpdateMode = Boolean(eventData.id);

  const eventFormButtonsClass = classNames('event-form__buttons', {
    'event-form__buttons_filled': IsUpdateMode,
  });

  return (
    <div className={eventFormButtonsClass}>
      {!IsUpdateMode && (
        <CreateButton isWorking={isFilled} eventData={eventData} updateEvents={onUpdateEvents} />
      )}
      {IsUpdateMode && (
        <>
          <RemoveButton id={eventData.id} updateEvents={onUpdateEvents} />
          <UpdateButton isWorking={isFilled} eventData={eventData} updateEvents={onUpdateEvents} />
        </>
      )}
    </div>
  );
};

export default EventFormButtons;

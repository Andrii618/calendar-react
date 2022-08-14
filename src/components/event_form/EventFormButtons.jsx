import React from 'react';
import classNames from 'classnames';

import CreateButton from './CreateButton';
import RemoveButton from './RemoveButton';
import UpdateButton from './UpdateButton';

const EventFormButtons = ({ eventData, isFilled, onUpdateEvents, showAlert }) => {
  const { id } = eventData;

  const IsUpdateMode = Boolean(id);

  const eventFormButtonsClass = classNames('event-form__buttons', {
    'event-form__buttons_filled': IsUpdateMode,
  });

  return (
    <div className={eventFormButtonsClass}>
      {!IsUpdateMode && (
        <CreateButton
          isWorking={isFilled}
          eventData={eventData}
          updateEvents={onUpdateEvents}
          showHint={showAlert}
        />
      )}
      {IsUpdateMode && (
        <>
          <RemoveButton id={id} updateEvents={onUpdateEvents} />
          <UpdateButton
            id={id}
            isWorking={isFilled}
            eventData={eventData}
            updateEvents={onUpdateEvents}
          />
        </>
      )}
    </div>
  );
};

export default EventFormButtons;

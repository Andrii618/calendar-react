import React from 'react';

import CurrentTimeLine from './CurrentTimeLine';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({
  dataDay,
  dayEvents,
  isCurrentDay,
  onUpdateEvents,
  setNewDay,
  setEventTime,
  eventDate,
}) => {
  const hours = Array.from({ length: 24 }, (_, index) => index);

  return (
    <div className={'calendar__day'} data-day={dataDay}>
      {isCurrentDay && <CurrentTimeLine setNewDay={setNewDay} />}
      {hours.map(hour => {
        const hourEvents = dayEvents
          ? dayEvents.filter(event => event.dateFrom.getHours() === hour)
          : null;

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            onUpdateEvents={onUpdateEvents}
            onSetEventTime={setEventTime}
            eventDate={eventDate}
          />
        );
      })}
    </div>
  );
};

export default Day;

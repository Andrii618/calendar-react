import React from 'react';
import PropTypes from 'prop-types';

import CurrentTimeLine from './CurrentTimeLine';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({
  setNewDay,
  setEventData,
  dataDay,
  dayEvents,
  isCurrentDay,
  eventDate,
  isDataGotten,
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
            setEventData={setEventData}
            dataHour={hour}
            hourEvents={hourEvents}
            eventDate={eventDate}
            isDataGotten={isDataGotten}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  setNewDay: PropTypes.func.isRequired,
  setEventData: PropTypes.func.isRequired,
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array,
  isCurrentDay: PropTypes.bool.isRequired,
  eventDate: PropTypes.object.isRequired,
  isDataGotten: PropTypes.bool,
};

Day.defaultProps = {
  dayEvents: null,
  isDataGotten: false,
};

export default Day;

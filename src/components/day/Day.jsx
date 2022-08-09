import React, { useEffect, useState } from 'react';

import Hour from '../hour/Hour';

import './day.scss';

const getMinsPassed = () => {
  const base = new Date();

  return base.getHours() * 60 + base.getMinutes();
};

const Day = ({ dataDay, dayEvents, currentDay }) => {
  const [passedMins, setPassedMins] = useState(getMinsPassed());

  const hours = Array.from({ length: 24 }, (_, index) => index);

  useEffect(() => {
    const timerId = setInterval(() => {
      setPassedMins(getMinsPassed());
    }, 60000);

    return () => {
      clearInterval(timerId);
    };
  }, [getMinsPassed()]);

  return (
    <div className={'calendar__day'} data-day={dataDay}>
      {currentDay && <div className="red-line" style={{ top: passedMins }}></div>}
      {hours.map(hour => {
        //  getting all events from the day we will render

        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} />;
      })}
    </div>
  );
};

export default Day;

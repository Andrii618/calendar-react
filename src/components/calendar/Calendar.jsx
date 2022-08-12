import React, { useState } from 'react';

import Navigation from '../navigation/Navigation';
import Sidebar from '../sidebar/Sidebar';
import Week from '../week/Week';
import EventWindow from '../event_window/EventWindow';

import './calendar.scss';

const Calendar = ({ onUpdateEvents, setNewDay, weekDates, events, setEventTime }) => {
  const [eventData, setEventData] = useState(null);
  const [eventWindowVisible, setEventWindowVisible] = useState(false);

  const handleSetEventData = eventObjData => {
    setEventData(eventObjData);
    setEventWindowVisible(!eventWindowVisible);
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            setNewDay={setNewDay}
            setEventTime={setEventTime}
            setEventData={handleSetEventData}
          />
        </div>
        {eventWindowVisible && (
          <EventWindow
            eventDataObj={eventData}
            onUpdateEvents={onUpdateEvents}
            hideWindow={() => {
              setEventWindowVisible(!eventWindowVisible);
            }}
            events={events}
          />
        )}
      </div>
    </section>
  );
};
export default Calendar;

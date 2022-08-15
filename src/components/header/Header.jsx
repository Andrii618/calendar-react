import React from 'react';

import { getMonth } from '../../utils/dateUtils';

import './header.scss';

const Header = ({
  goCurrentWeek,
  goNextWeek,
  goPrevWeek,
  openModal,
  onSetEventData,
  weekDates,
  events,
  isWorking,
}) => {
  const eventsCounter = events !== null ? events.length : 0;

  return (
    <header className="header">
      <button
        className="button create-event-btn"
        onClick={() => {
          openModal();
          onSetEventData({ time: new Date() });
        }}
        disabled={!isWorking}
      >
        <i className="fas fa-plus create-event-btn__icon"></i>
        Create event
      </button>
      <div className="navigation">
        <span className="navigation__existed-events">
          {events &&
            eventsCounter !== 0 &&
            `You planned ${eventsCounter} ${eventsCounter === 1 ? 'event' : 'events'}`}
        </span>
        <button className="button navigation__today-btn" onClick={goCurrentWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={goPrevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={goNextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{getMonth(weekDates)}</span>
      </div>
    </header>
  );
};

export default Header;

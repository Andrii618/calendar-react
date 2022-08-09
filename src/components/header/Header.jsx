import React from 'react';

import { getMonth } from '../../utils/dateUtils';

import './header.scss';

const Header = ({ goNextWeek, goPrevWeek, goTodayWeek, weekDates }) => (
  <header className="header">
    <button className="button create-event-btn">
      <i className="fas fa-plus create-event-btn__icon"></i>
      Create
    </button>
    <div className="navigation">
      <button className="navigation__today-btn button" onClick={goTodayWeek}>
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

export default Header;

import React from 'react';

import NavigationDay from './NavigationDay';

import './navigation.scss';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map(dayDate => (
      <NavigationDay key={dayDate.getDay()} dayDate={dayDate} />
    ))}
  </header>
);

export default Navigation;

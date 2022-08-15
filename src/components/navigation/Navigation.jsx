import React from 'react';
import PropTypes from 'prop-types';

import NavigationDay from './NavigationDay';

import './navigation.scss';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map(dayDate => (
      <NavigationDay key={dayDate.getDay()} dayDate={dayDate} />
    ))}
  </header>
);

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;

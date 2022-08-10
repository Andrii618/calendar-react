import React from 'react';

import { formatTimeValue } from '../../utils/dateUtils';

import './sidebar.scss';

const Sidebar = () => (
  <div className="sidebar__time-scale">
    {Array.from({ length: 24 }, (_, hour) => (
      <div key={hour + 1} className="time-slot">
        <span className="time-slot__time">{`${formatTimeValue(hour + 1)}:00`}</span>
      </div>
    ))}
  </div>
);

export default Sidebar;

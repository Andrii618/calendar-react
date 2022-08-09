import React from 'react';

import './sidebar.scss';

const Sidebar = () => {
  const hours = Array.from({ length: 24 }, (_, index) => index + 1);

  return (
    <div className="sidebar__time-scale">
      {hours.map(hour => (
        <div key={hour} className="time-slot">
          <span className="time-slot__time">{`${String(hour).padStart(2, '0')}:00`}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

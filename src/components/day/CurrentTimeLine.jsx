import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getMinsPassed } from '../../utils/dateUtils';

const CurrentTimeLine = ({ setNewDay }) => {
  const [passedMins, setPassedMins] = useState(getMinsPassed());

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentMins = getMinsPassed();
      setPassedMins(currentMins);

      if (currentMins === 0) {
        setNewDay();
      }
    }, 60000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="red-line" style={{ top: passedMins }}>
      <i className="fas fa-circle red-line__circle"></i>
    </div>
  );
};

CurrentTimeLine.propTypes = {
  setNewDay: PropTypes.func.isRequired,
};

export default CurrentTimeLine;

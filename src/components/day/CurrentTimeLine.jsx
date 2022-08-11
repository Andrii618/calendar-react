import React, { useState, useEffect } from 'react';

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

  return <div className="red-line" style={{ top: passedMins }}></div>;
};

export default CurrentTimeLine;

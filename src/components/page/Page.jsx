import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getWeekStartDate, generateWeekRange } from '../../utils/dateUtils';
import Header from '../header/Header';
import Calendar from '../calendar/Calendar';

const Page = ({ openModal, setEventData, events, isDataGotten }) => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const handleNextWeekClick = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)));
  };

  const handlePrevWeekClick = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)));
  };

  const handleSetCurrentDate = () => {
    setWeekStartDate(new Date());
  };

  return (
    <div>
      <Header
        goCurrentWeek={handleSetCurrentDate}
        goNextWeek={handleNextWeekClick}
        goPrevWeek={handlePrevWeekClick}
        openModal={openModal}
        onSetEventData={setEventData}
        weekDates={weekDates}
        events={events}
        isWorking={isDataGotten}
      />
      <Calendar
        setNewDay={handleSetCurrentDate}
        setEventData={setEventData}
        events={events}
        weekDates={weekDates}
        isDataGotten={isDataGotten}
      />
    </div>
  );
};

Page.propTypes = {
  openModal: PropTypes.func.isRequired,
  setEventData: PropTypes.func.isRequired,
  events: PropTypes.array,
  isDataGotten: PropTypes.bool,
};

Page.defaultProps = {
  events: null,
  isDataGotten: false,
};

export default Page;

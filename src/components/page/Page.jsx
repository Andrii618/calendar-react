import React, { useState } from 'react';

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

export default Page;

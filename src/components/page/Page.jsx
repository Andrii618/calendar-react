import React, { useState } from 'react';

import { getWeekStartDate, generateWeekRange } from '../../utils/dateUtils';
import Calendar from '../calendar/Calendar';
import Header from '../header/Header';

const Page = ({ openModal, setEventData, events }) => {
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
      />
      <Calendar
        setNewDay={handleSetCurrentDate}
        setEventData={setEventData}
        events={events}
        weekDates={weekDates}
      />
    </div>
  );
};

export default Page;

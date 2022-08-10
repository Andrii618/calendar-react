import React, { useState } from 'react';

import { getWeekStartDate, generateWeekRange } from '../../utils/dateUtils';
import Calendar from '../calendar/Calendar';
import Header from '../header/Header';

const Page = ({ toggleModal, events, updateEvents }) => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const handleNextWeekClick = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)));
  };

  const handlePrevWeekClick = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)));
  };

  const handleGoCurrentWeek = () => {
    setWeekStartDate(new Date());
  };

  return (
    <>
      <Header
        goNextWeek={handleNextWeekClick}
        goPrevWeek={handlePrevWeekClick}
        goCurrentWeek={handleGoCurrentWeek}
        createEvent={updateEvents}
        onClickCreate={toggleModal}
        weekDates={weekDates}
      />
      <Calendar
        onUpdateEvents={updateEvents}
        weekDates={weekDates}
        events={events}
        goNewDay={handleGoCurrentWeek}
      />
    </>
  );
};

export default Page;

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

  const handleSetCurrentDate = () => {
    setWeekStartDate(new Date());
  };

  return (
    <div>
      <Header
        goNextWeek={handleNextWeekClick}
        goPrevWeek={handlePrevWeekClick}
        goCurrentWeek={handleSetCurrentDate}
        createEvent={updateEvents}
        onClickCreate={toggleModal}
        weekDates={weekDates}
      />
      <Calendar
        onUpdateEvents={updateEvents}
        weekDates={weekDates}
        events={events}
        setNewDay={handleSetCurrentDate}
      />
    </div>
  );
};

export default Page;

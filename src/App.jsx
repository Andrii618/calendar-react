import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';

import { fetchEvents } from './gateway/events';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils';

import './styles/common.scss';
import Modal from './components/modal/Modal';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [events, setEvents] = useState(null);

  const handleEventsFetch = () => {
    fetchEvents().then(eventsData => {
      setEvents(eventsData);
    });
  };

  useEffect(() => {
    handleEventsFetch();
  }, []);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const handleNextWeekClick = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)));
  };

  const handlePrevWeekClick = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)));
  };

  const handleTodayClick = () => {
    setWeekStartDate(new Date());
  };

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Header
        goNextWeek={handleNextWeekClick}
        goPrevWeek={handlePrevWeekClick}
        goTodayWeek={handleTodayClick}
        createEvent={toggleModalVisibility}
        weekDates={weekDates}
      />
      <Calendar weekDates={weekDates} events={events} onRemoveEvent={handleEventsFetch} />
      {isModalVisible && (
        <Modal hideCreateForm={toggleModalVisibility} onUploadEvent={handleEventsFetch}></Modal>
      )}
    </>
  );
};

export default App;

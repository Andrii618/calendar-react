import React, { useEffect, useState } from 'react';

import { fetchEvents } from './gateway/events';
import { createEventTime } from './gateway/createEventData';

import Page from './components/page/Page';
import Modal from './components/modal/Modal';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [events, setEvents] = useState(null);
  const [eventTime, setEventTime] = useState();

  const handleEventsFetch = () => {
    fetchEvents()
      .then(eventsData => {
        setEvents(eventsData);
      })
      .catch(() => {
        alert("Internal Server Error. Can't display events. Try refresh page");
      });
  };

  useEffect(() => {
    handleEventsFetch();
  }, []);

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSetEventTime = time => {
    setEventTime(createEventTime(time));
    toggleModalVisibility();
  };

  return (
    <>
      <Page
        toggleModal={toggleModalVisibility}
        updateEvents={handleEventsFetch}
        events={events}
        setEventTime={handleSetEventTime}
      />
      {isModalVisible && (
        <Modal
          hideModal={toggleModalVisibility}
          onUploadEvent={handleEventsFetch}
          eventTime={eventTime}
        ></Modal>
      )}
    </>
  );
};

export default App;

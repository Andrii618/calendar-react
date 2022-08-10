import React, { useEffect, useState } from 'react';

import { fetchEvents } from './gateway/events';

import Page from './components/page/Page';
import Modal from './components/modal/Modal';

const App = () => {
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

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Page events={events} toggleModal={toggleModalVisibility} updateEvents={handleEventsFetch} />
      {isModalVisible && (
        <Modal hideCreateForm={toggleModalVisibility} onUploadEvent={handleEventsFetch}></Modal>
      )}
    </>
  );
};

export default App;

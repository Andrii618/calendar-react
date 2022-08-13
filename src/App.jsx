import React, { useEffect, useState } from 'react';

import { fetchEvents } from './gateway/events';
import { createTimeProps } from './utils/createEventData';

import Page from './components/page/Page';
import Modal from './components/modal/Modal';
import Alert from './components/alert/alert';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAlertExist, setIsAlertExist] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [events, setEvents] = useState(null);
  const [eventData, setEventData] = useState(null);

  const toggleModalVisibility = booleanValue => {
    setIsModalVisible(booleanValue);
  };

  const handleShowAlert = errorText => {
    setAlertText(errorText);
    setIsAlertExist(true);

    setTimeout(() => {
      setIsAlertExist(false);
    }, 6000);
  };

  const handleEventsFetch = () => {
    fetchEvents()
      .then(eventsData => {
        setEvents(eventsData);
      })
      .catch(() => {
        handleShowAlert("Internal Server Error. Can't display events");
      })
      .finally(() => {
        toggleModalVisibility(false);
      });
  };

  useEffect(() => {
    handleEventsFetch();
  }, []);

  const handleSetEventData = eventDataObj => {
    setEventData(eventDataObj);

    if (eventDataObj?.time) {
      const eventTimeData = createTimeProps(eventDataObj.time);

      setEventData({ ...eventTimeData, description: '', title: '', id: null });
    }

    toggleModalVisibility(true);
  };

  return (
    <>
      <Page
        openModal={() => {
          toggleModalVisibility(true);
        }}
        updateEvents={handleEventsFetch}
        setEventData={handleSetEventData}
        events={events}
      />
      {isModalVisible && (
        <Modal
          hideModal={() => {
            toggleModalVisibility(false);
          }}
          onUploadEvent={handleEventsFetch}
          eventData={eventData}
          events={events}
          showAlert={handleShowAlert}
        ></Modal>
      )}
      {isAlertExist && <Alert errorText={alertText} />}
    </>
  );
};

export default App;

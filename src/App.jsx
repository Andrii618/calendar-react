import React, { useState } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';

import { getWeekStartDate, generateWeekRange } from './utils/dateUtils';

import './styles/common.scss';
import Modal from './components/modal/Modal';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <Calendar weekDates={weekDates} />
      {isModalVisible && <Modal hideCreateForm={toggleModalVisibility}></Modal>}
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

//     return (
//       <>
//         <Header />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }

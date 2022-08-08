import React, { useState } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';

import { getWeekStartDate, generateWeekRange } from './utils/dateUtils';

import './styles/common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

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

  return (
    <>
      <Header
        goNextWeek={handleNextWeekClick}
        goPrevWeek={handlePrevWeekClick}
        goTodayWeek={handleTodayClick}
        weekStartDate={weekStartDate}
        weekDates={weekDates}
      />
      <Calendar weekDates={weekDates} />
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

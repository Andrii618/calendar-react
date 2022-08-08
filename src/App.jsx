import React from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';

import { getWeekStartDate, generateWeekRange } from './utils/dateUtils';

import './styles/common.scss';

const App = () => {
  const weekDates = generateWeekRange(getWeekStartDate(new Date()));

  return (
    <>
      <Header />
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

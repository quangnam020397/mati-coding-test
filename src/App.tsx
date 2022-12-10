import dayjs from 'dayjs';
import EventCalender from './containers/EventCalender';

import isToday from 'dayjs/plugin/isToday';

dayjs.extend(isToday);

dayjs().format();

function App() {
  return <EventCalender />;
}

export default App;

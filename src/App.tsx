import { DatePicker } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import dayjs from "dayjs";
import EventCalender from "./containers/EventCalender";

dayjs().format();

function App() {
  return (
    <>
      <DatePicker />
      <EventCalender />;
    </>
  );
}

export default App;

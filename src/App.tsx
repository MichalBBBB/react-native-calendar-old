import React from 'react';
import dayjs from 'dayjs';
import {Dimensions, View} from 'react-native';
import weekday from 'dayjs/plugin/weekday';
import Calendar from './calendar';
import {useState} from 'react';

dayjs.extend(weekday);
const App = () => {
  const [selectedDay, setSelectedDay] = useState(dayjs());
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Calendar
        selectedDay={selectedDay}
        calendarWidth={Dimensions.get('screen').width}
        pastScrollRange={10}
        futureScrollRange={20}
        onChangeSelectedDay={setSelectedDay}
        weekHeight={34}
      />
    </View>
  );
};

export default App;

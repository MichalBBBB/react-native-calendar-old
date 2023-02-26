import dayjs from 'dayjs';
import React, {memo} from 'react';
import {Text, Pressable} from 'react-native';

interface DayProps {
  day: dayjs.Dayjs;
  isSelected: boolean;
  monthNum: number | undefined;
  onPress: (date: dayjs.Dayjs) => void;
}

const Day: React.FC<DayProps> = ({day, isSelected, monthNum, onPress}) => {
  return (
    <Pressable
      style={{
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: isSelected ? 15 : undefined,
        backgroundColor: isSelected ? '#ddd' : undefined,
        marginVertical: 2,
      }}
      onPress={() => {
        onPress(day);
      }}>
      <Text
        style={{
          color: !monthNum
            ? 'black'
            : day.get('month') + 1 == monthNum
            ? 'black'
            : 'grey',
        }}>
        {day.get('date').toString()}
      </Text>
    </Pressable>
  );
};

export default memo(Day, (prevProps, nextProps) => {
  if (prevProps.isSelected == nextProps.isSelected) {
    return true;
  } else {
    return false;
  }
});

import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Agenda, AgendaEntry, DateData} from 'react-native-calendars';
import testIDs from '../testIDs';
import {existsFile, readFile, writeFile} from '../../../utils/fs';

const AgendaScreen = () => {
  const [items, setItems] = useState<any>({});

  const loadItems = async (day: DateData) => {
    const res = await existsFile('Calendar.txt');
    const itemsCopy = {...items};
    if (!(res as any)) {
      for (let i = -10; i < 200; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!itemsCopy[strTime]) {
          itemsCopy[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            itemsCopy[strTime] = [];
          }
        }
      }
      writeFile('Calendar.txt', JSON.stringify(itemsCopy));
      setItems(itemsCopy);
    } else {
      const list = await readFile('Calendar.txt');
      const listData = JSON.parse(list as string);
      if (!listData[day.dateString]) {
        listData[day.dateString] = [];
      }

      setItems(listData);
    }
  };

  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item, {height: reservation.height}]}
        onPress={() => Alert.alert(reservation.name)}>
        <Text style={{fontSize, color}}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderDay = (day: any, item: any) => {
    console.log(day[0].getDay());
    return (
      <View style={[styles.day]}>
        <Text style={[styles.dayOne]}>
          {day[0].getMonth() + 1}月{day[0].getDate()}日
        </Text>
        <Text style={[styles.dayOne]}>{day[0].getFullYear()}年</Text>
      </View>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>没有计划和收支</Text>
      </View>
    );
  };

  const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  // 把时间戳转为yyyy-mm-dd
  const timeToString = (time: Date | number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  return (
    <Agenda
      testID={testIDs.agenda.CONTAINER}
      items={items}
      loadItemsForMonth={loadItems}
      selected={timeToString(new Date())}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
      rowHasChanged={rowHasChanged}
      showClosingKnob
      showOnlySelectedDayItems
      // hideKnob={true}
      // markingType={'period'}
      // markedDates={{
      //    '2017-05-08': {textColor: '#43515c'},
      //    '2017-05-09': {textColor: '#43515c'},
      //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
      //    '2017-05-21': {startingDay: true, color: 'blue'},
      //    '2017-05-22': {endingDay: true, color: 'gray'},
      //    '2017-05-24': {startingDay: true, color: 'gray'},
      //    '2017-05-25': {color: 'gray'},
      //    '2017-05-26': {endingDay: true, color: 'gray'}}}
      // monthFormat={'yyyy'}
      // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
      // renderDay={(day, item) => {
      //   console.log(day.day(), item);
      //   return <Text>{day ? day.day() : 'item'}</Text>;
      // }}
      renderDay={renderDay}
      // hideExtraDays={false}
      // showOnlySelectedDayItems
      // reservationsKeyExtractor={this.reservationsKeyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 2,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 2,
    paddingTop: 30,
    fontSize: 20,
  },
  day: {
    height: 100,
    width: 100,
    padding: 10,
    margin: 10,
    // backgroundColor: 'white',
  },
  dayOne: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default AgendaScreen;

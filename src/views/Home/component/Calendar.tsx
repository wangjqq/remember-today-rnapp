import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component, useState} from 'react';
import {
  Agenda,
  AgendaEntry,
  AgendaSchedule,
  CalendarProvider,
  DateData,
} from 'react-native-calendars';
import testIDs from '../testIDs';

interface State {
  items?: AgendaSchedule;
}

const AgendaScreen = () => {
  const [items, setItems] = useState<any>(undefined);
  // reservationsKeyExtractor = (item, index) => {
  //   return `${item?.reservation?.day}${index}`;
  // };
  const loadItems = (day: DateData) => {
    const items1 = items || {};

    // for (let i = -15; i < 85; i++) {
    //   const time = day.timestamp + i * 24 * 60 * 60 * 1000;

    //   const strTime = timeToString(time);

    //   if (!items1[strTime]) {
    //     items1[strTime] = [];

    //     const numItems = Math.floor(Math.random() * 3 + 1);
    //     for (let j = 0; j < numItems; j++) {
    //       items1[strTime].push({
    //         name: 'Item for ' + strTime + ' #' + j,
    //         height: Math.max(50, Math.floor(Math.random() * 150)),
    //         day: strTime,
    //       });
    //     }
    //   }
    // }

    // const newItems: AgendaSchedule = {};
    // Object.keys(items1).forEach(key => {
    //   newItems[key] = items1[key];
    // });
    // console.log(newItems);
    // console.log({
    //   '2017-04-01': [{name: 'name', height: 100, day: '2017-04-01'}],
    // });
    // setItems(newItems);
    setItems({
      '2017-04-01': [
        {name: 'name', height: 100, day: '2017-04-01'},
        {name: 'name1', height: 120, day: '2017-04-01'},
      ],
      '2017-04-02': [
        {name: 'name2', height: 100, day: '2017-04-02'},
        {name: 'name3', height: 120, day: '2017-04-02'},
      ],
    });
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

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };
  return (
    // <CalendarProvider showTodayButton date={'yyyy-MM-dd'}>
    <Agenda
      testID={testIDs.agenda.CONTAINER}
      items={items}
      loadItemsForMonth={loadItems}
      selected={'2017-04-01'}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
      rowHasChanged={rowHasChanged}
      showClosingKnob={true}
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
      //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      // hideExtraDays={false}
      // showOnlySelectedDayItems
      // reservationsKeyExtractor={this.reservationsKeyExtractor}
    />
    // </CalendarProvider>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default AgendaScreen;

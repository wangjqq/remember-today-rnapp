import {StyleSheet, View} from 'react-native';
import React from 'react';
import BaseHeader from '../../component/base-header';
import AgendaScreen from './component/Calendar';

const Home = () => {
  return (
    <View>
      <BaseHeader title="主页" />
      <View style={[styles.item]}>
        <AgendaScreen />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  item: {
    height: '95.5%',
    width: '100%',
  },
});

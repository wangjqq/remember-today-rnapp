import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BaseHeader from '../../component/base-header';

const Home = () => {
  return (
    <View>
      <BaseHeader title="主页" />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

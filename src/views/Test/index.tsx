import {StyleSheet, View} from 'react-native';
import React from 'react';
import BaseHeader from '../../component/base-header';
import {Button} from '@ant-design/react-native';
import {appendFile, delFile, readFile, writeFile} from '../../utils/fs';

const Test = () => {
  const read = async () => {
    const res = await readFile('test.txt');
    console.log(res?.split('\n'));
  };
  return (
    <View>
      <BaseHeader title="测试" />
      <Button onPress={() => writeFile('test.txt', '111\n')}>写入</Button>
      <Button onPress={read}>读取</Button>
      <Button onPress={() => appendFile('test.txt', '111\n')}>添加</Button>
      <Button onPress={() => delFile('Calendar.txt')}>删除</Button>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});

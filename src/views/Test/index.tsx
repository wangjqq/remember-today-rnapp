import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BaseHeader from '../../component/base-header';
import {Button} from '@ant-design/react-native';
import {appendFile, delFile, readFile, writeFile} from '../../utils/fs';

const Test = () => {
  const [readList, setReadList] = useState<string[][]>([]);
  const read = async () => {
    const res = await readFile('Calendar.txt');
    setReadList(Object.entries(JSON.parse(res as string)));
  };
  read();
  return (
    <ScrollView>
      <View>
        <BaseHeader title="测试" />
        <Button onPress={() => writeFile('test.txt', '111\n')}>写入</Button>
        <Button onPress={read}>读取</Button>
        <Button onPress={() => appendFile('test.txt', '111\n')}>添加</Button>
        <Button onPress={() => delFile('Calendar.txt')}>删除</Button>
        <View>
          {readList.map(item => {
            return (
              <View
                key={item[0]}
                style={{
                  borderWidth: 1,
                  borderColor: 'black',
                  margin: 10,
                  padding: 10,
                  backgroundColor: 'lightgray',
                }}>
                <Text>
                  {item[0]}
                  {item[1]}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Test;

const styles = StyleSheet.create({});

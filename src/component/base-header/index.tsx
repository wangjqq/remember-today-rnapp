import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface BaseHeaderProps {
  title: String;
}

const BaseHeader: React.FC<BaseHeaderProps> = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default BaseHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'black',
  },
});

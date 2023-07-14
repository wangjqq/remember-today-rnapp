import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {readFile} from '../../utils/fs';
import User from './component/User';
import Login from './component/Login';

const My: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>({isLogin: false});
  useEffect(() => {
    const readUser = async () => {
      const list = await readFile('User.txt');
      setUserInfo(JSON.parse(list || ''));
    };
    readUser();
  }, []);

  return (
    <>
      <View style={[styles.my]}>{userInfo.isLogin ? <User /> : <Login />}</View>
    </>
  );
};

export default My;

const styles = StyleSheet.create({
  my: {
    width: '100%',
    marginTop: '20%',
  },
});

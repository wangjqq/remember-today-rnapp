import {Image, StyleSheet, Text, View} from 'react-native';
import {registerApp, sendAuthRequest} from 'native-wechat';
import axios from 'axios';
import {Button, Checkbox, Icon, Toast} from '@ant-design/react-native';
import {useEffect, useState} from 'react';
import {REACT_APP_AppSecret, REACT_APP_appid} from '@env';

const Login: React.FC = () => {
  const [agree, setAgree] = useState(false);
  useEffect(() => {
    return registerApp({appid: REACT_APP_appid});
  }, []);

  const onButtonClicked = async () => {
    if (agree) {
      try {
        const {data} = await sendAuthRequest({
          scope: 'snsapi_userinfo',
        });
        const response = await axios.get(
          `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${REACT_APP_appid}&secret=${REACT_APP_AppSecret}&code=${data.code}&grant_type=authorization_code`,
        );
        const response1 = await axios.get(
          `https://api.weixin.qq.com/sns/userinfo?access_token=${response.data.access_token}&openid=${response.data.openid}`,
        );
        console.log(data, response, response1);
      } catch (error) {
        console.log(error);
        Toast.fail({
          content: '请重新授权登录',
          duration: 2,
        });
      }
    } else {
      Toast.info({
        content: '请阅读并同意协议~',
        duration: 1,
        stackable: true,
      });
    }
  };

  const agreeChange = ({target}: any) => {
    setAgree(target.checked);
  };

  return (
    <View style={[styles.login]}>
      <Image source={require('../../../assets/login.png')} />
      <Button style={[styles.wxbtn]} onPress={onButtonClicked}>
        <Icon name="wechat" />
        <Text style={[styles.wxbtn_text]}>微信登陆</Text>
      </Button>
      <Checkbox onChange={agreeChange} style={[styles.checkbox]}>
        <Text>
          阅读并同意 <Text>《许可协议》</Text> <Text>《隐私指引》</Text>
        </Text>
      </Checkbox>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  wxbtn: {
    width: '60%',
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 100,
    backgroundColor: 'rgb(26, 208, 35)',
  },
  wxbtn_text: {
    color: 'white',
    fontSize: 16,
  },
  checkbox: {},
});

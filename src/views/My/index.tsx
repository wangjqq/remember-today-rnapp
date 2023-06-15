import {Text, View} from 'react-native';
import {registerApp, sendAuthRequest} from 'native-wechat';
import BaseHeader from '../../component/base-header';
import {useEffect} from 'react';
import {Button} from '@ant-design/react-native';

const My: React.FC = () => {
  useEffect(() => {
    return registerApp({appid: 'wx2ea47d7ecc7cd6d0'});
  }, []);

  const onButtonClicked = async () => {
    console.log(111);
    try {
      const data = await sendAuthRequest({
        scope: 'snsapi_userinfo',
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    // await verifyWechatCode(code)
  };

  return (
    <View>
      <BaseHeader title="我的" />
      <Button onPress={onButtonClicked}>
        <Text>Send Auth Request</Text>
      </Button>
    </View>
  );
};

export default My;

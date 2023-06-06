import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Icon, SearchBar, TabBar} from '@ant-design/react-native';
import CalendarTab from './src/views/CalendarTab';
import Home from './src/views/Home';
import Test from './src/views/Test';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: 'HomeTab',
    };
  }

  renderContent(pageText: any) {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={{margin: 50}}>{pageText}</Text>
      </View>
    );
  }

  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="主页"
          icon={<Icon name="home" />}
          selected={this.state.selectedTab === 'HomeTab'}
          onPress={() => this.onChangeTab('HomeTab')}>
          <Home />
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="calendar" />}
          title="日历"
          selected={this.state.selectedTab === 'CalendarTab'}
          onPress={() => this.onChangeTab('CalendarTab')}>
          <CalendarTab />
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="clock-circle" />}
          title="番茄专注"
          selected={this.state.selectedTab === 'clockTab'}
          onPress={() => this.onChangeTab('clockTab')}>
          <Test />
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="read" />}
          title="小结"
          selected={this.state.selectedTab === 'summaryTab'}
          onPress={() => this.onChangeTab('summaryTab')}>
          {this.renderContent('小结')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="我的"
          selected={this.state.selectedTab === 'myTab'}
          onPress={() => this.onChangeTab('myTab')}>
          {this.renderContent('我的')}
        </TabBar.Item>
      </TabBar>
    );
  }
}

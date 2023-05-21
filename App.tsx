import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Icon, SearchBar, TabBar} from '@ant-design/react-native';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }

  renderContent(pageText: any) {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <SearchBar placeholder="Search" showCancelButton />
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
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}>
          {this.renderContent('主页')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="ordered-list" />}
          title="日历"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}>
          {this.renderContent('日历')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="like" />}
          title="番茄专注"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}>
          {this.renderContent('番茄专注')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="小结"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}>
          {this.renderContent('小结')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}>
          {this.renderContent('我的')}
        </TabBar.Item>
      </TabBar>
    );
  }
}
